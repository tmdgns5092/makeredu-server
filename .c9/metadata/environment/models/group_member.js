{"filter":false,"title":"group_member.js","tooltip":"/models/group_member.js","undoManager":{"mark":82,"position":82,"stack":[[{"start":{"row":2,"column":57},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":3,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["id: {       ","      type: DataTypes.INTEGER, ","      primaryKey: true, ","      autoIncrement: true, ","      allowNull: false,","      comment: \"유저 인덱스\"","    }, name: {     ","      type: DataTypes.STRING, ","      allowNull: false,","      comment: \"유저 이름\"","    }"],"id":4}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":11},"action":"remove","lines":["name"],"id":5},{"start":{"row":9,"column":7},"end":{"row":9,"column":15},"action":"insert","lines":["group_id"]}],[{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":[","],"id":6}],[{"start":{"row":13,"column":6},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":4},"action":"remove","lines":["  "],"id":8},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":6},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":13,"column":7},"end":{"row":13,"column":16},"action":"insert","lines":["member_id"],"id":10}],[{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":[":"],"id":11}],[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":[" "],"id":12},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["{"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["}"]}],[{"start":{"row":13,"column":19},"end":{"row":15,"column":4},"action":"insert","lines":["","      ","    "],"id":13}],[{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["t"],"id":14},{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["y"]},{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["p"]},{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["e"]},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":[":"]}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":[" "],"id":15},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["D"]},{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["a"]},{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["t"]},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["a"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["T"]}],[{"start":{"row":14,"column":12},"end":{"row":14,"column":17},"action":"remove","lines":["DataT"],"id":16},{"start":{"row":14,"column":12},"end":{"row":14,"column":21},"action":"insert","lines":["DataTypes"]}],[{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"insert","lines":["."],"id":17},{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["S"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["T"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["R"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":["I"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["N"]},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["G"]},{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":[","]}],[{"start":{"row":14,"column":29},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":15,"column":0},"end":{"row":15,"column":6},"action":"insert","lines":["      "]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["a"]},{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["l"]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["l"]}],[{"start":{"row":15,"column":6},"end":{"row":15,"column":9},"action":"remove","lines":["all"],"id":19},{"start":{"row":15,"column":6},"end":{"row":15,"column":15},"action":"insert","lines":["allowNull"]}],[{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":[":"],"id":20}],[{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":[" "],"id":21},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"insert","lines":["f"]},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"insert","lines":["a"]},{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["l"]},{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":["s"]},{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["e"]},{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":[","]}],[{"start":{"row":15,"column":23},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":22},{"start":{"row":16,"column":0},"end":{"row":16,"column":6},"action":"insert","lines":["      "]},{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["c"]},{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["o"]},{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["m"]},{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["m"]},{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"insert","lines":["e"]},{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"insert","lines":["n"]},{"start":{"row":16,"column":12},"end":{"row":16,"column":13},"action":"insert","lines":["t"]},{"start":{"row":16,"column":13},"end":{"row":16,"column":14},"action":"insert","lines":[":"]}],[{"start":{"row":16,"column":14},"end":{"row":16,"column":15},"action":"insert","lines":[" "],"id":23}],[{"start":{"row":16,"column":15},"end":{"row":16,"column":17},"action":"insert","lines":["\"\""],"id":24}],[{"start":{"row":18,"column":4},"end":{"row":19,"column":31},"action":"remove","lines":["group_id: DataTypes.STRING,","    member_id: DataTypes.STRING"],"id":25}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["    "],"id":26},{"start":{"row":17,"column":5},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":22},"action":"remove","lines":["유저 인덱스"],"id":27},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"remove","lines":["r"],"id":28}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["그"],"id":29}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":19},"action":"insert","lines":["룹 "],"id":30},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["참"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["여"]}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":23},"action":"insert","lines":["자 "],"id":31},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["ㄹ"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"remove","lines":["ㄹ"]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"remove","lines":[" "]}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":[" "],"id":32},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["테"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["이"]}],[{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":["블"],"id":33}],[{"start":{"row":9,"column":7},"end":{"row":13,"column":5},"action":"remove","lines":["group_id: {     ","      type: DataTypes.STRING, ","      allowNull: false,","      comment: \"유저 이름\"","    }"],"id":34},{"start":{"row":9,"column":7},"end":{"row":19,"column":6},"action":"insert","lines":["sender_id: {","      type:DataTypes.INTEGER,","      allowNull: false,","      references: { ","        model:{ ","          tableName:'users',","          key:'id'","        }","      },","      comment: \"요청 유저 인덱스\"","    },"]}],[{"start":{"row":19,"column":5},"end":{"row":19,"column":6},"action":"remove","lines":[","],"id":35}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":16},"action":"remove","lines":["sender_id"],"id":36},{"start":{"row":9,"column":7},"end":{"row":9,"column":16},"action":"insert","lines":["sender_id"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":16},"action":"remove","lines":["sender_id"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["ㅎ"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"remove","lines":["ㅎ"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["ㅎ"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["개"]},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["ㅕ"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["ㅔ"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["ㅔ"]},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"remove","lines":["ㅕ"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["개"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"remove","lines":["ㅎ"]}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["ㅎ"],"id":37},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["개"]},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["ㅕ"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["ㅔ"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["ㅔ"]},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"remove","lines":["ㅕ"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["개"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"remove","lines":["ㅎ"]}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["g"],"id":38},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["r"]},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["o"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["u"]},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["p"]},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["_"]},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["i"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["d"]}],[{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"remove","lines":[" "],"id":39}],[{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"remove","lines":[" "],"id":40}],[{"start":{"row":14,"column":21},"end":{"row":14,"column":26},"action":"remove","lines":["users"],"id":41},{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"insert","lines":["g"]},{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["r"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["o"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["u"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":["p"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":21},"action":"remove","lines":["요청 유저"],"id":42},{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["r"]}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"remove","lines":["r"],"id":43}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["r"],"id":44},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["m"]},{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["f"]},{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"insert","lines":["n"]},{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["q"]}],[{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"remove","lines":["q"],"id":45},{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"remove","lines":["n"]},{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"remove","lines":["f"]},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"remove","lines":["m"]},{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"remove","lines":["r"]}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["그"],"id":46},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["룹"]}],[{"start":{"row":19,"column":19},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":20,"column":0},"end":{"row":20,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":20,"column":6},"end":{"row":28,"column":23},"action":"insert","lines":["type:DataTypes.INTEGER,","      allowNull: false,","      references: {","        model:{","          tableName:'groups',","          key:'id'","        }","      },","      comment: \"그룹 인덱스\""],"id":48}],[{"start":{"row":28,"column":23},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":29,"column":0},"end":{"row":29,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":24,"column":21},"end":{"row":24,"column":27},"action":"remove","lines":["groups"],"id":50},{"start":{"row":24,"column":21},"end":{"row":24,"column":27},"action":"insert","lines":["groups"]},{"start":{"row":24,"column":21},"end":{"row":24,"column":27},"action":"remove","lines":["groups"]},{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"insert","lines":["ㅕ"]},{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"remove","lines":["ㅕ"]},{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"insert","lines":["ㅕ"]},{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["ㄴ"]},{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"insert","lines":["ㄷ"]},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["ㄱ"]},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["ㄴ"]}],[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"remove","lines":["ㄴ"],"id":51},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"remove","lines":["ㄱ"]},{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"remove","lines":["ㄷ"]},{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"remove","lines":["ㄴ"]},{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"remove","lines":["ㅕ"]}],[{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"insert","lines":["u"],"id":52},{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["s"]},{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"insert","lines":["e"]},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["r"]},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["s"]}],[{"start":{"row":29,"column":6},"end":{"row":32,"column":17},"action":"remove","lines":["","      type: DataTypes.STRING,","      allowNull: false,","      comment: \"\""],"id":53}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":6},"action":"remove","lines":["      "],"id":54},{"start":{"row":28,"column":23},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":18},"action":"remove","lines":["그룹"],"id":55},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["d"]}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["d"],"id":56}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["d"],"id":57}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["d"],"id":58}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["유"],"id":59},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["저"]}],[{"start":{"row":32,"column":39},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":60},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":33,"column":4},"end":{"row":34,"column":96},"action":"insert","lines":["friend.belongsTo(models.user, {as: 'sender', foreignKey: 'sender_id', targetKey: 'id'});","    friend.belongsTo(models.user, {as: 'receiver', foreignKey: 'receiver_id', targetKey: 'id'});"],"id":61}],[{"start":{"row":33,"column":4},"end":{"row":33,"column":10},"action":"remove","lines":["friend"],"id":63},{"start":{"row":33,"column":4},"end":{"row":33,"column":5},"action":"insert","lines":["g"]},{"start":{"row":33,"column":5},"end":{"row":33,"column":6},"action":"insert","lines":["r"]},{"start":{"row":33,"column":6},"end":{"row":33,"column":7},"action":"insert","lines":["o"]},{"start":{"row":33,"column":7},"end":{"row":33,"column":8},"action":"insert","lines":["u"]},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["p"]}],[{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["_"],"id":64},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["m"]},{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":["e"]},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["m"]}],[{"start":{"row":33,"column":4},"end":{"row":33,"column":13},"action":"remove","lines":["group_mem"],"id":65},{"start":{"row":33,"column":4},"end":{"row":33,"column":16},"action":"insert","lines":["group_member"]}],[{"start":{"row":34,"column":4},"end":{"row":34,"column":10},"action":"remove","lines":["friend"],"id":66},{"start":{"row":34,"column":4},"end":{"row":34,"column":16},"action":"insert","lines":["group_member"]}],[{"start":{"row":33,"column":46},"end":{"row":33,"column":52},"action":"remove","lines":["sender"],"id":67},{"start":{"row":33,"column":46},"end":{"row":33,"column":47},"action":"insert","lines":["g"]},{"start":{"row":33,"column":47},"end":{"row":33,"column":48},"action":"insert","lines":["r"]},{"start":{"row":33,"column":48},"end":{"row":33,"column":49},"action":"insert","lines":["u"]},{"start":{"row":33,"column":49},"end":{"row":33,"column":50},"action":"insert","lines":["p"]}],[{"start":{"row":33,"column":49},"end":{"row":33,"column":50},"action":"remove","lines":["p"],"id":68},{"start":{"row":33,"column":48},"end":{"row":33,"column":49},"action":"remove","lines":["u"]},{"start":{"row":33,"column":47},"end":{"row":33,"column":48},"action":"remove","lines":["r"]},{"start":{"row":33,"column":46},"end":{"row":33,"column":47},"action":"remove","lines":["g"]}],[{"start":{"row":33,"column":46},"end":{"row":33,"column":47},"action":"insert","lines":["g"],"id":69},{"start":{"row":33,"column":47},"end":{"row":33,"column":48},"action":"insert","lines":["r"]},{"start":{"row":33,"column":48},"end":{"row":33,"column":49},"action":"insert","lines":["o"]},{"start":{"row":33,"column":49},"end":{"row":33,"column":50},"action":"insert","lines":["u"]},{"start":{"row":33,"column":50},"end":{"row":33,"column":51},"action":"insert","lines":["p"]},{"start":{"row":33,"column":51},"end":{"row":33,"column":52},"action":"insert","lines":["_"]},{"start":{"row":33,"column":52},"end":{"row":33,"column":53},"action":"insert","lines":["i"]},{"start":{"row":33,"column":53},"end":{"row":33,"column":54},"action":"insert","lines":["d"]}],[{"start":{"row":34,"column":46},"end":{"row":34,"column":54},"action":"remove","lines":["receiver"],"id":70},{"start":{"row":34,"column":46},"end":{"row":34,"column":47},"action":"insert","lines":["m"]},{"start":{"row":34,"column":47},"end":{"row":34,"column":48},"action":"insert","lines":["e"]},{"start":{"row":34,"column":48},"end":{"row":34,"column":49},"action":"insert","lines":["m"]},{"start":{"row":34,"column":49},"end":{"row":34,"column":50},"action":"insert","lines":["b"]},{"start":{"row":34,"column":50},"end":{"row":34,"column":51},"action":"insert","lines":["e"]},{"start":{"row":34,"column":51},"end":{"row":34,"column":52},"action":"insert","lines":["r"]},{"start":{"row":34,"column":52},"end":{"row":34,"column":53},"action":"insert","lines":["_"]},{"start":{"row":34,"column":53},"end":{"row":34,"column":54},"action":"insert","lines":["i"]},{"start":{"row":34,"column":54},"end":{"row":34,"column":55},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":70},"end":{"row":33,"column":79},"action":"remove","lines":["sender_id"],"id":71},{"start":{"row":33,"column":70},"end":{"row":33,"column":71},"action":"insert","lines":["g"]},{"start":{"row":33,"column":71},"end":{"row":33,"column":72},"action":"insert","lines":["r"]},{"start":{"row":33,"column":72},"end":{"row":33,"column":73},"action":"insert","lines":["o"]},{"start":{"row":33,"column":73},"end":{"row":33,"column":74},"action":"insert","lines":["u"]},{"start":{"row":33,"column":74},"end":{"row":33,"column":75},"action":"insert","lines":["p"]}],[{"start":{"row":33,"column":70},"end":{"row":33,"column":75},"action":"remove","lines":["group"],"id":72},{"start":{"row":33,"column":70},"end":{"row":33,"column":78},"action":"insert","lines":["group_id"]}],[{"start":{"row":34,"column":71},"end":{"row":34,"column":82},"action":"remove","lines":["receiver_id"],"id":73},{"start":{"row":34,"column":71},"end":{"row":34,"column":72},"action":"insert","lines":["m"]},{"start":{"row":34,"column":72},"end":{"row":34,"column":73},"action":"insert","lines":["e"]},{"start":{"row":34,"column":73},"end":{"row":34,"column":74},"action":"insert","lines":["m"]},{"start":{"row":34,"column":74},"end":{"row":34,"column":75},"action":"insert","lines":["b"]},{"start":{"row":34,"column":75},"end":{"row":34,"column":76},"action":"insert","lines":["e"]}],[{"start":{"row":34,"column":71},"end":{"row":34,"column":76},"action":"remove","lines":["membe"],"id":74},{"start":{"row":34,"column":71},"end":{"row":34,"column":80},"action":"insert","lines":["member_id"]}],[{"start":{"row":33,"column":34},"end":{"row":33,"column":38},"action":"remove","lines":["user"],"id":75},{"start":{"row":33,"column":34},"end":{"row":33,"column":35},"action":"insert","lines":["g"]},{"start":{"row":33,"column":35},"end":{"row":33,"column":36},"action":"insert","lines":["r"]},{"start":{"row":33,"column":36},"end":{"row":33,"column":37},"action":"insert","lines":["o"]},{"start":{"row":33,"column":37},"end":{"row":33,"column":38},"action":"insert","lines":["u"]},{"start":{"row":33,"column":38},"end":{"row":33,"column":39},"action":"insert","lines":["p"]}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":[" "],"id":76},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["이"]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["ㅣ"]},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["ㄴ"]},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"remove","lines":["ㄴ"]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"remove","lines":["ㅣ"]},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["이"]},{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"remove","lines":[" "]},{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"remove","lines":["블"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"remove","lines":["이"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"remove","lines":["테"]}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["인"],"id":77},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["ㄷ"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"remove","lines":["ㄷ"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"remove","lines":["인"]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"remove","lines":[" "]}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":[" "],"id":78},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["테"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["이"]}],[{"start":{"row":8,"column":25},"end":{"row":8,"column":27},"action":"insert","lines":["블 "],"id":79},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["인"]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["ㅌ"]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"remove","lines":["ㅌ"]}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["덱"],"id":80},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["스"]}],[{"start":{"row":19,"column":7},"end":{"row":19,"column":13},"action":"remove","lines":["member"],"id":81},{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":["u"]},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["s"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["e"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":34,"column":46},"end":{"row":34,"column":47},"action":"remove","lines":["m"],"id":82},{"start":{"row":34,"column":46},"end":{"row":34,"column":47},"action":"remove","lines":["e"]},{"start":{"row":34,"column":46},"end":{"row":34,"column":47},"action":"remove","lines":["m"]},{"start":{"row":34,"column":46},"end":{"row":34,"column":47},"action":"remove","lines":["b"]},{"start":{"row":34,"column":46},"end":{"row":34,"column":47},"action":"remove","lines":["e"]}],[{"start":{"row":34,"column":46},"end":{"row":34,"column":47},"action":"insert","lines":["u"],"id":83},{"start":{"row":34,"column":47},"end":{"row":34,"column":48},"action":"insert","lines":["s"]},{"start":{"row":34,"column":48},"end":{"row":34,"column":49},"action":"insert","lines":["e"]}],[{"start":{"row":34,"column":69},"end":{"row":34,"column":75},"action":"remove","lines":["member"],"id":84},{"start":{"row":34,"column":69},"end":{"row":34,"column":70},"action":"insert","lines":["u"]},{"start":{"row":34,"column":70},"end":{"row":34,"column":71},"action":"insert","lines":["s"]},{"start":{"row":34,"column":71},"end":{"row":34,"column":72},"action":"insert","lines":["e"]},{"start":{"row":34,"column":72},"end":{"row":34,"column":73},"action":"insert","lines":["r"]}],[{"start":{"row":33,"column":42},"end":{"row":33,"column":58},"action":"remove","lines":["as: 'group_id', "],"id":85}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":56},"action":"remove","lines":["as: 'user_id', "],"id":86}]]},"ace":{"folds":[],"scrolltop":89.5,"scrollleft":0,"selection":{"start":{"row":8,"column":19},"end":{"row":8,"column":19},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1596156996168,"hash":"c393afd38773609ca111d26f8aa08c059dbac3db"}