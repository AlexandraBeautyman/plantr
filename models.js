const db = new Sequelize('postgres://localhost:5432/plantr')
module.exports = db

const Gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.SMALLINT
    },
});

const Plot = db.define('plot', {
    size: {
        type: Sequelize.SMALLINT
    },
    shaded: {
        type: Sequelize.BOOLEAN
    }
});

const Vegetable = db.define('vegetable', {
    name :{
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    planted_on: {
        type: Sequelize.DATE
    }
});

Plot.belongsTo(Gardener);
