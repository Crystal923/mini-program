Component({
  properties: {
    stars: {
      type: Number,
      value: 5
    },
    score: {
      type: Number
    },
    rule: {
      type: Number,
      value: 10
    }
  },
  data: {
    starList: [],
    weight: 0,
    currentScore: 0
  },
  methods: {
    rating(e) {
      let scene = e.currentTarget.dataset.scene;
      let i = e.currentTarget.dataset.index;
      let list = [].concat(...this.data.starList);
      this.data.starList = [];
      this.data.currentScore = 0;
      let that = this;
      if ("left" == scene) {
        list.forEach((item, index) => {
          if (index == i) {
            this.data.starList.push(that.data.weight / 2);
          } else if (index > i) {
            this.data.starList.push(0);
          } else {
            this.data.starList.push(that.data.weight);
          }
        })
      } else if ("right" == scene) {
        list.forEach((item, index) => {
          if (index <= i) {
            this.data.starList.push(that.data.weight);
          } else if (index > i) {
            this.data.starList.push(0);
          }
        })
      }
      that.data.starList.forEach(item => {
        that.data.currentScore += item
      })
      that.setData({
        starList: that.data.starList,
        currentScore: that.data.currentScore
      })
    }
  },
  attached: function() {
    let stars = this.data.stars;
    let score = this.data.score;
    let rule = this.data.rule;
    // 每个星星的权重
    let weight = rule / stars;
    console.log("权重：", weight);
    // 当前分数需要几颗星星
    let count = Math.ceil(score / weight);
    console.log("需要星星数：", count);
    // 最有一颗星的分值表示
    let lastScore = (score - (count - 1) * weight).toFixed(1);
    console.log("最后一颗星的分值：", lastScore);
    for (let i = 0; i < count - 1; i++) {
      this.data.starList.push(rule / stars);
    }
    this.data.starList.push(lastScore);
    while (this.data.starList.length < stars) {
      this.data.starList.push(0);
    }
    this.setData({
      starList: this.data.starList,
      weight: rule / stars,
      currentScore: this.data.score
    })
  }
})