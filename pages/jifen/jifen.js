Page({
  data: {
    gameModes: ['九球模式', '四球模式', '斯诺克模式', '黑八模式'],
    currentMode: 0,
    players: [
      { name: '玩家1', score: 0 },
      { name: '玩家2', score: 0 }
    ],
    activePlayer: 0,
    
    nineBallTypes: [
      { type: 'normal', label: '普胜', points: '+4', color: '#3498db' },
      { type: 'smallGold', label: '小金', points: '+7', color: '#f1c40f' },
      { type: 'bigGold', label: '大金', points: '+10', color: '#e67e22' },
      { type: 'foul', label: '犯规', points: '-1', color: '#95a5a6' },
      { type: 'blackGold', label: '黑金', points: '-7', color: '#2c3e50' }
    ],

    snookerBalls: [
      { type: 'red', label: '红球', points: 1, class: 's-red' },
      { type: 'yellow', label: '黄球', points: 2, class: 's-yellow' },
      { type: 'green', label: '绿球', points: 3, class: 's-green' },
      { type: 'brown', label: '棕球', points: 4, class: 's-brown' },
      { type: 'blue', label: '蓝球', points: 5, class: 's-blue' },
      { type: 'pink', label: '粉球', points: 6, class: 's-pink' },
      { type: 'black', label: '黑球', points: 7, class: 's-black' },
      { type: 'foul', label: '犯规', points: -1, class: 's-gray' }
    ]
  },

  // 切换玩法
  changeMode(e) {
    const mode = e.detail.value;
    this.setData({
      currentMode: mode,
      activePlayer: 0,
      players: [
        { name: '玩家1', score: 0 },
        { name: '玩家2', score: 0 }
      ]
    });
  },

  // 九球/四球计分
  handleNineBall(e) {
    const { type } = e.currentTarget.dataset;
    const current = this.data.activePlayer;
    const opponent = 1 - current;
    const rules = this.data.nineBallTypes.find(t => t.type == type);
    
    const newPlayers = JSON.parse(JSON.stringify(this.data.players));
    const scoreChange = parseInt(rules.points);
    
    newPlayers[current].score += scoreChange;
    if (this.data.currentMode < 2) {
      newPlayers[opponent].score = -newPlayers[current].score;
    }

    this.setData({
      players: newPlayers,
      activePlayer: scoreChange > 0 ? current : opponent
    });
  },

  // 斯诺克计分
  handleSnooker(e) {
    const { type } = e.currentTarget.dataset;
    const current = this.data.activePlayer;
    const ball = this.data.snookerBalls.find(b => b.type == type);
    
    const newPlayers = JSON.parse(JSON.stringify(this.data.players));
    newPlayers[current].score += ball.points;

    this.setData({
      players: newPlayers,
      activePlayer: ball.points > 0 ? current : 1 - current
    });
  },

  // 切换斯诺克玩家
  switchSnookerPlayer() {
    this.setData({
      activePlayer: 1 - this.data.activePlayer
    });
  },

  // 黑八获胜
  handleBlackEight(e) {
    const winner = parseInt(e.currentTarget.dataset.player);
    const newPlayers = JSON.parse(JSON.stringify(this.data.players));
    newPlayers[winner].score += 1;

    this.setData({
      players: newPlayers,
      activePlayer: winner
    });
  },

  // 重置
  resetAll() {
    this.setData({
      players: [
        { name: '玩家1', score: 0 },
        { name: '玩家2', score: 0 }
      ],
      activePlayer: 0
    });
  }
});