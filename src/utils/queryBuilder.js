const queryBuilder = (archived, filter, Op, Tag) => {
    let query = {
        include: { model: Tag },
        order: [['updatedAt', 'DESC']]
    };
    if (filter) query = { ...query, include: { 
        model: Tag,
        where: {
            name: filter
        }
    }};
    if (archived) query = { ...query, where: { deletedAt: { [Op.ne]: null } }, paranoid: false }
    return query;
}

module.exports = queryBuilder;