Component({
  properties: {

  },
  data: {
    calendar: {}
  },
  methods: {
    /**
     * 设置日历面板数据
     * @param {number} year 年份
     * @param {number} month  月份
     */
    _calculateDays(year, month, curDate) {
      let days = [];
      let day;
      let selectMonth;
      let selectYear;
      const thisMonthDays = this.getThisMonthDays(year, month);
      const selectedDay = this.data.calendar.selectedDay;
      if (selectedDay && selectedDay.length) {
        day = selectedDay[0].day;
        selectMonth = selectedDay[0].month;
        selectYear = selectedDay[0].year;
      }
      for (let i = 1; i <= thisMonthDays; i++) {
        days.push({
          day: i,
          choosed: curDate ? (i === curDate) : (year === selectYear && month === selectMonth && i === day),
          year,
          month,
        });
      }
      const tmp = {
        'calendar.days': days,
      };
      if (curDate) {
        tmp['calendar.selectedDay'] = [{
          day: curDate,
          choosed: true,
          year,
          month,
        }];
      }
      this.setData(tmp);
      console.log('初始化日历：', this.data.calendar);
    },
    /**
  * 计算指定月份共多少天
  * @param {number} year 年份
  * @param {number} month  月份
  */
    getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate();
    },
    /**
     * 计算指定月份第一天星期几
     * @param {number} year 年份
     * @param {number} month  月份
     */
    getFirstDayOfWeek(year, month) {
      return new Date(Date.UTC(year, month - 1, 1)).getDay();
    },
    /**
     * 计算当前月份前后两月应占的格子
     * @param {number} year 年份
     * @param {number} month  月份
     */
    calculateEmptyGrids(year, month) {
      this.calculatePrevMonthGrids.call(this, year, month);
      this.calculateNextMonthGrids.call(this, year, month);
    },
    /**
     * 计算上月应占的格子
     * @param {number} year 年份
     * @param {number} month  月份
     */
    calculatePrevMonthGrids(year, month) {
      const prevMonthDays = this.getThisMonthDays(year, month - 1);
      const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
      let empytGrids = [];
      if (firstDayOfWeek > 0) {
        const len = prevMonthDays - firstDayOfWeek;
        for (let i = prevMonthDays; i > len; i--) {
          empytGrids.push(i);
        }
        this.setData({
          'calendar.empytGrids': empytGrids.reverse(),
        });
      } else {
        this.setData({
          'calendar.empytGrids': null,
        });
      }
    },
    /**
     * 计算下月应占的格子
     * @param {number} year 年份
     * @param {number} month  月份
     */
    calculateNextMonthGrids(year, month) {
      const thisMonthDays = this.getThisMonthDays(year, month);
      const lastDayWeek = new Date(`${year}-${month}-${thisMonthDays}`).getDay();
      let lastEmptyGrids = [];
      if (+lastDayWeek !== 6) {
        const len = 7 - (lastDayWeek + 1);
        for (let i = 1; i <= len; i++) {
          lastEmptyGrids.push(i);
        }
        this.setData({
          'calendar.lastEmptyGrids': lastEmptyGrids,
        });
      } else {
        this.setData({
          'calendar.lastEmptyGrids': null,
        });
      }
    },
    /**
     * 选择上一月
     */
    choosePrevMonth() {
      const curYear = this.data.calendar.curYear;
      const curMonth = this.data.calendar.curMonth;
      let newMonth = curMonth - 1;
      let newYear = curYear;
      if (newMonth < 1) {
        newYear = curYear - 1;
        newMonth = 12;
      }
      this.calculateDays.call(this, newYear, newMonth);
      this.calculateEmptyGrids.call(this, newYear, newMonth);
      this.setData({
        'calendar.curYear': newYear,
        'calendar.curMonth': newMonth,
      });
    },
    /**
     * 选择下一月
     */
    chooseNextMonth() {
      const curYear = this.data.calendar.curYear;
      const curMonth = this.data.calendar.curMonth;
      let newMonth = curMonth + 1;
      let newYear = curYear;
      if (newMonth > 12) {
        newYear = curYear + 1;
        newMonth = 1;
      }
      this.calculateDays.call(this, newYear, newMonth);
      this.calculateEmptyGrids.call(this, newYear, newMonth);
      this.setData({
        'calendar.curYear': newYear,
        'calendar.curMonth': newMonth
      });
    },
    /**
     * 选择具体日期
     * @param {!object} e  事件对象
     */
    tapDayItem(e) {
      const idx = e.currentTarget.dataset.idx;
      const config = this.config;
      const { multi, afterTapDay, onTapDay } = config;
      const days = this.data.calendar.days.slice();
      let selected;
      let selectedDays = this.data.calendar.selectedDay || [];
      if (multi) {
        days[idx].choosed = !days[idx].choosed;
        if (!days[idx].choosed) {
          days[idx].cancel = true; // 是否是取消的选择日期
          selected = days[idx];
          selectedDays = selectedDays.filter(item => item.day !== days[idx].day);
        } else {
          selected = days[idx];
          selectedDays.push(selected);
        }
        if (onTapDay && typeof onTapDay === 'function') {
          config.onTapDay(selected, e);
          return;
        };
        this.setData({
          'calendar.days': days,
          'calendar.selectedDay': selectedDays,
        });
      } else {
        days.forEach(day => {
          day.choosed = false;
        });
        days[idx].choosed = true;
        selected = days[idx];
        if (onTapDay && typeof onTapDay === 'function') {
          config.onTapDay(selected, e);
          return;
        };
        this.setData({
          'calendar.days': days,
          'calendar.selectedDay': [selected],
        });
      }
      if (afterTapDay && typeof afterTapDay === 'function') {
        if (!multi) {
          config.afterTapDay(selected);
        } else {
          config.afterTapDay(selected, selectedDays);
        }
      };
    },
    /**
     * 跳转至今天
     */
    jumpToToday() {
      const date = new Date();
      const curYear = date.getFullYear();
      const curMonth = date.getMonth() + 1;
      const curDate = date.getDate();
      this.setData({
        'calendar.curYear': curYear,
        'calendar.curMonth': curMonth,
      });
      this.calculateEmptyGrids.call(this, curYear, curMonth);
      this.calculateDays.call(this, curYear, curMonth, curDate);
    },
    calendarTouchstart(e) {
      const t = e.touches[0];
      const startX = t.clientX;
      const startY = t.clientY;
      this.slideLock = true; // 滑动事件加锁
      this.setData({
        'gesture.startX': startX,
        'gesture.startY': startY
      });
    },
    calendarTouchmove(e) {
      if (isLeftSlide.call(this, e)) {
        this.chooseNextMonth.call(this);
      }
      if (isRightSlide.call(this, e)) {
        this.choosePrevMonth.call(this);
      }
    }
  },
  ready: function () {
    this._calculateDays();
  }
})
