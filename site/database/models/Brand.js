module.exports = (sequelize, dataTypes) => {

    let alias = "Brand";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        brand_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }

    let config = {
        tableName: "brands",
        timestamps: false
    }



    const Brand = sequelize.define(alias, cols, config);

    return Brand;
}