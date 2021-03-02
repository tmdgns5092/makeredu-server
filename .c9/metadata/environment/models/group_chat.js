{"filter":false,"title":"group_chat.js","tooltip":"/models/group_chat.js","undoManager":{"mark":66,"position":66,"stack":[[{"start":{"row":3,"column":4},"end":{"row":3,"column":26},"action":"remove","lines":["name: DataTypes.STRING"],"id":2},{"start":{"row":3,"column":4},"end":{"row":40,"column":7},"action":"insert","lines":["id: {","        allowNull: false,","        autoIncrement: true,","        primaryKey: true,","        type: Sequelize.INTEGER,","        comment: \"그룹 채팅 테이블 인덱스\"","      },","      sender_id: {","        allowNull: false,","        type: Sequelize.INTEGER,","        references: {","          model: 'users',","          key: 'id'","        },","        comment: \"채팅 발송유저 인덱스\"","      },","      group_id: {","        allowNull: false,","        type: Sequelize.INTEGER,","        references: {","          model: 'groups',","          key: 'id'","        },","        comment: \"그룹 인덱스\"","      },","      message: {","        allowNull: false,","        type: Sequelize.STRING,","        comment: \"채팅 문자\"","      },","      createdAt: {","        allowNull: false,","        type: Sequelize.DATE","      },","      updatedAt: {","        allowNull: false,","        type: Sequelize.DATE","      }"]}],[{"start":{"row":39,"column":14},"end":{"row":39,"column":23},"action":"remove","lines":["Sequelize"],"id":3},{"start":{"row":39,"column":14},"end":{"row":39,"column":23},"action":"insert","lines":["DataTypes"]}],[{"start":{"row":35,"column":14},"end":{"row":35,"column":23},"action":"remove","lines":["Sequelize"],"id":4},{"start":{"row":35,"column":14},"end":{"row":35,"column":23},"action":"insert","lines":["DataTypes"]}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":23},"action":"remove","lines":["Sequelize"],"id":5},{"start":{"row":30,"column":14},"end":{"row":30,"column":23},"action":"insert","lines":["DataTypes"]}],[{"start":{"row":21,"column":14},"end":{"row":21,"column":23},"action":"remove","lines":["Sequelize"],"id":6},{"start":{"row":21,"column":14},"end":{"row":21,"column":23},"action":"insert","lines":["DataTypes"]}],[{"start":{"row":12,"column":14},"end":{"row":12,"column":23},"action":"remove","lines":["Sequelize"],"id":7},{"start":{"row":12,"column":14},"end":{"row":12,"column":23},"action":"insert","lines":["DataTypes"]}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":28},"action":"insert","lines":["DataTypes"],"id":8}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":32},"action":"remove","lines":["SequeDataTypeslize"],"id":9},{"start":{"row":7,"column":14},"end":{"row":7,"column":32},"action":"insert","lines":["SequeDataTypeslize"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":32},"action":"remove","lines":["SequeDataTypeslize"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["ㅇ"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":["ㅇ"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["ㅇ"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["ㅁ"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["ㅅ"]},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["ㅁ"]},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["쑈"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["ㅔ"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["ㄷ"]}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["ㄴ"],"id":10},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["ㄴ"]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":21},"action":"remove","lines":["ㅇㅁㅅㅁ쑈ㅔㄷ"],"id":11}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["d"],"id":12},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["a"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["t"]},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["a"]}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"remove","lines":["a"],"id":13},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"remove","lines":["t"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"remove","lines":["a"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":["d"]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["D"],"id":14},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["a"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["t"]},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["a"]},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["T"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["y"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["p"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["s"],"id":15}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":[" "],"id":16},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["{"]},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["}"]}],[{"start":{"row":14,"column":19},"end":{"row":15,"column":19},"action":"remove","lines":[" 'users',","          key: 'id'"],"id":17}],[{"start":{"row":14,"column":18},"end":{"row":16,"column":10},"action":"insert","lines":["","            ","          "],"id":18}],[{"start":{"row":15,"column":12},"end":{"row":16,"column":19},"action":"insert","lines":[" 'users',","          key: 'id'"],"id":19}],[{"start":{"row":16,"column":10},"end":{"row":16,"column":12},"action":"insert","lines":["  "],"id":20}],[{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"remove","lines":[" "],"id":21}],[{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["t"],"id":22},{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["a"]},{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["b"]},{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":["l"]},{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":["e"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"insert","lines":["N"]},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"insert","lines":["a"]},{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["m"]}],[{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":["e"],"id":23},{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":[":"]}],[{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":[" "],"id":24}],[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["{"],"id":25},{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["}"]}],[{"start":{"row":25,"column":19},"end":{"row":26,"column":19},"action":"remove","lines":["'groups',","          key: 'id'"],"id":26}],[{"start":{"row":25,"column":18},"end":{"row":27,"column":10},"action":"insert","lines":["","            ","          "],"id":27}],[{"start":{"row":26,"column":12},"end":{"row":27,"column":19},"action":"insert","lines":["'groups',","          key: 'id'"],"id":28}],[{"start":{"row":27,"column":10},"end":{"row":27,"column":12},"action":"insert","lines":["  "],"id":29}],[{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["t"],"id":30},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["a"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["b"]},{"start":{"row":26,"column":15},"end":{"row":26,"column":16},"action":"insert","lines":["l"]},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["e"]},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["N"]},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["a"]},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["m"]},{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":["e"]},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":[":"]}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":[" "],"id":31}],[{"start":{"row":47,"column":39},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":4},"end":{"row":48,"column":5},"action":"insert","lines":["g"]}],[{"start":{"row":48,"column":4},"end":{"row":48,"column":5},"action":"remove","lines":["g"],"id":33}],[{"start":{"row":48,"column":4},"end":{"row":48,"column":5},"action":"insert","lines":["g"],"id":34},{"start":{"row":48,"column":5},"end":{"row":48,"column":6},"action":"insert","lines":["r"]},{"start":{"row":48,"column":6},"end":{"row":48,"column":7},"action":"insert","lines":["o"]},{"start":{"row":48,"column":7},"end":{"row":48,"column":8},"action":"insert","lines":["u"]},{"start":{"row":48,"column":8},"end":{"row":48,"column":9},"action":"insert","lines":["p"]}],[{"start":{"row":48,"column":9},"end":{"row":48,"column":10},"action":"insert","lines":["."],"id":35}],[{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"insert","lines":["b"],"id":36},{"start":{"row":48,"column":11},"end":{"row":48,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":48,"column":4},"end":{"row":48,"column":12},"action":"remove","lines":["group.be"],"id":37},{"start":{"row":48,"column":4},"end":{"row":48,"column":5},"action":"insert","lines":["g"]},{"start":{"row":48,"column":5},"end":{"row":48,"column":6},"action":"insert","lines":["r"]},{"start":{"row":48,"column":6},"end":{"row":48,"column":7},"action":"insert","lines":["o"]},{"start":{"row":48,"column":7},"end":{"row":48,"column":8},"action":"insert","lines":["u"]},{"start":{"row":48,"column":8},"end":{"row":48,"column":9},"action":"insert","lines":["p"]},{"start":{"row":48,"column":9},"end":{"row":48,"column":10},"action":"insert","lines":["_"]},{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"insert","lines":["c"]},{"start":{"row":48,"column":11},"end":{"row":48,"column":12},"action":"insert","lines":["h"]},{"start":{"row":48,"column":12},"end":{"row":48,"column":13},"action":"insert","lines":["a"]},{"start":{"row":48,"column":13},"end":{"row":48,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":48,"column":14},"end":{"row":48,"column":15},"action":"insert","lines":["."],"id":38},{"start":{"row":48,"column":15},"end":{"row":48,"column":16},"action":"insert","lines":["b"]},{"start":{"row":48,"column":16},"end":{"row":48,"column":17},"action":"insert","lines":["e"]},{"start":{"row":48,"column":17},"end":{"row":48,"column":18},"action":"insert","lines":["l"]}],[{"start":{"row":48,"column":15},"end":{"row":48,"column":18},"action":"remove","lines":["bel"],"id":39},{"start":{"row":48,"column":15},"end":{"row":48,"column":24},"action":"insert","lines":["belongsTo"]}],[{"start":{"row":48,"column":24},"end":{"row":48,"column":26},"action":"insert","lines":["()"],"id":40}],[{"start":{"row":48,"column":25},"end":{"row":48,"column":26},"action":"insert","lines":["m"],"id":41},{"start":{"row":48,"column":26},"end":{"row":48,"column":27},"action":"insert","lines":["o"]},{"start":{"row":48,"column":27},"end":{"row":48,"column":28},"action":"insert","lines":["d"]},{"start":{"row":48,"column":28},"end":{"row":48,"column":29},"action":"insert","lines":["e"]},{"start":{"row":48,"column":29},"end":{"row":48,"column":30},"action":"insert","lines":["l"]},{"start":{"row":48,"column":30},"end":{"row":48,"column":31},"action":"insert","lines":["s"]},{"start":{"row":48,"column":31},"end":{"row":48,"column":32},"action":"insert","lines":["."]},{"start":{"row":48,"column":32},"end":{"row":48,"column":33},"action":"insert","lines":["g"]}],[{"start":{"row":48,"column":33},"end":{"row":48,"column":34},"action":"insert","lines":["r"],"id":42},{"start":{"row":48,"column":34},"end":{"row":48,"column":35},"action":"insert","lines":["o"]},{"start":{"row":48,"column":35},"end":{"row":48,"column":36},"action":"insert","lines":["u"]},{"start":{"row":48,"column":36},"end":{"row":48,"column":37},"action":"insert","lines":["p"]}],[{"start":{"row":48,"column":37},"end":{"row":48,"column":38},"action":"insert","lines":[","],"id":43}],[{"start":{"row":48,"column":38},"end":{"row":48,"column":39},"action":"insert","lines":[" "],"id":44}],[{"start":{"row":48,"column":39},"end":{"row":48,"column":41},"action":"insert","lines":["{}"],"id":45}],[{"start":{"row":48,"column":40},"end":{"row":48,"column":41},"action":"insert","lines":[" "],"id":46},{"start":{"row":48,"column":41},"end":{"row":48,"column":42},"action":"insert","lines":["f"]},{"start":{"row":48,"column":42},"end":{"row":48,"column":43},"action":"insert","lines":["o"]},{"start":{"row":48,"column":43},"end":{"row":48,"column":44},"action":"insert","lines":["r"]},{"start":{"row":48,"column":44},"end":{"row":48,"column":45},"action":"insert","lines":["e"]},{"start":{"row":48,"column":45},"end":{"row":48,"column":46},"action":"insert","lines":["i"]}],[{"start":{"row":48,"column":46},"end":{"row":48,"column":47},"action":"insert","lines":["g"],"id":47},{"start":{"row":48,"column":47},"end":{"row":48,"column":48},"action":"insert","lines":["n"]}],[{"start":{"row":48,"column":41},"end":{"row":48,"column":48},"action":"remove","lines":["foreign"],"id":48},{"start":{"row":48,"column":41},"end":{"row":48,"column":51},"action":"insert","lines":["foreignKey"]}],[{"start":{"row":48,"column":51},"end":{"row":48,"column":52},"action":"insert","lines":[":"],"id":49}],[{"start":{"row":48,"column":52},"end":{"row":48,"column":53},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":48,"column":53},"end":{"row":48,"column":55},"action":"insert","lines":["''"],"id":51}],[{"start":{"row":48,"column":54},"end":{"row":48,"column":55},"action":"insert","lines":["g"],"id":52},{"start":{"row":48,"column":55},"end":{"row":48,"column":56},"action":"insert","lines":["r"]},{"start":{"row":48,"column":56},"end":{"row":48,"column":57},"action":"insert","lines":["o"]},{"start":{"row":48,"column":57},"end":{"row":48,"column":58},"action":"insert","lines":["u"]},{"start":{"row":48,"column":58},"end":{"row":48,"column":59},"action":"insert","lines":["p"]},{"start":{"row":48,"column":59},"end":{"row":48,"column":60},"action":"insert","lines":["_"]},{"start":{"row":48,"column":60},"end":{"row":48,"column":61},"action":"insert","lines":["i"]},{"start":{"row":48,"column":61},"end":{"row":48,"column":62},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":63},"end":{"row":48,"column":64},"action":"insert","lines":[","],"id":53}],[{"start":{"row":48,"column":64},"end":{"row":48,"column":65},"action":"insert","lines":[" "],"id":54},{"start":{"row":48,"column":65},"end":{"row":48,"column":66},"action":"insert","lines":["t"]},{"start":{"row":48,"column":66},"end":{"row":48,"column":67},"action":"insert","lines":["a"]},{"start":{"row":48,"column":67},"end":{"row":48,"column":68},"action":"insert","lines":["r"]},{"start":{"row":48,"column":68},"end":{"row":48,"column":69},"action":"insert","lines":["g"]},{"start":{"row":48,"column":69},"end":{"row":48,"column":70},"action":"insert","lines":["e"]},{"start":{"row":48,"column":70},"end":{"row":48,"column":71},"action":"insert","lines":["t"]},{"start":{"row":48,"column":71},"end":{"row":48,"column":72},"action":"insert","lines":["K"]},{"start":{"row":48,"column":72},"end":{"row":48,"column":73},"action":"insert","lines":["e"]}],[{"start":{"row":48,"column":73},"end":{"row":48,"column":74},"action":"insert","lines":["y"],"id":55},{"start":{"row":48,"column":74},"end":{"row":48,"column":75},"action":"insert","lines":[":"]}],[{"start":{"row":48,"column":75},"end":{"row":48,"column":76},"action":"insert","lines":[" "],"id":56}],[{"start":{"row":48,"column":76},"end":{"row":48,"column":78},"action":"insert","lines":["''"],"id":57}],[{"start":{"row":48,"column":77},"end":{"row":48,"column":78},"action":"insert","lines":["i"],"id":58},{"start":{"row":48,"column":78},"end":{"row":48,"column":79},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":82},"end":{"row":48,"column":83},"action":"insert","lines":[";"],"id":59}],[{"start":{"row":47,"column":39},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":60},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":48,"column":4},"end":{"row":48,"column":83},"action":"insert","lines":["group_chat.belongsTo(models.group, { foreignKey: 'group_id', targetKey: 'id'});"],"id":61}],[{"start":{"row":48,"column":32},"end":{"row":48,"column":37},"action":"remove","lines":["group"],"id":62},{"start":{"row":48,"column":32},"end":{"row":48,"column":33},"action":"insert","lines":["u"]},{"start":{"row":48,"column":33},"end":{"row":48,"column":34},"action":"insert","lines":["s"]},{"start":{"row":48,"column":34},"end":{"row":48,"column":35},"action":"insert","lines":["e"]},{"start":{"row":48,"column":35},"end":{"row":48,"column":36},"action":"insert","lines":["r"]}],[{"start":{"row":48,"column":53},"end":{"row":48,"column":61},"action":"remove","lines":["group_id"],"id":63},{"start":{"row":48,"column":53},"end":{"row":48,"column":54},"action":"insert","lines":["s"]},{"start":{"row":48,"column":54},"end":{"row":48,"column":55},"action":"insert","lines":["e"]},{"start":{"row":48,"column":55},"end":{"row":48,"column":56},"action":"insert","lines":["n"]},{"start":{"row":48,"column":56},"end":{"row":48,"column":57},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":53},"end":{"row":48,"column":57},"action":"remove","lines":["send"],"id":64},{"start":{"row":48,"column":53},"end":{"row":48,"column":62},"action":"insert","lines":["sender_id"]}],[{"start":{"row":48,"column":4},"end":{"row":48,"column":83},"action":"remove","lines":["group_chat.belongsTo(models.user, { foreignKey: 'sender_id', targetKey: 'id'});"],"id":65}],[{"start":{"row":48,"column":2},"end":{"row":48,"column":4},"action":"remove","lines":["  "],"id":66},{"start":{"row":48,"column":0},"end":{"row":48,"column":2},"action":"remove","lines":["  "]},{"start":{"row":47,"column":39},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":48,"column":83},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":67},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":49,"column":4},"end":{"row":49,"column":83},"action":"insert","lines":["group_chat.belongsTo(models.user, { foreignKey: 'sender_id', targetKey: 'id'});"],"id":68}]]},"ace":{"folds":[],"scrolltop":261,"scrollleft":0,"selection":{"start":{"row":44,"column":7},"end":{"row":44,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":14,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1600415535955,"hash":"29bf43af0f86de0af6f47b58ccbf9b278de445c5"}