module.exports = (sequelize, dataTypes) => {

    let alias = "Carts";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        payment: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        bill: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type:dataTypes.DATEONLY
        }
    }

    let config = {
        tableName: "carts",
        timestamps: false
    }



    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}