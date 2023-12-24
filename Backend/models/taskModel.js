module.exports = (sequelize, DataTypes) => {

    const Task = sequelize.define("task", {
        task: {
            type: DataTypes.STRING
        },
        progress: {
            type: DataTypes.STRING,
            allowNull: false
        }
    
    })

    return Task

}