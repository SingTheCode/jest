function getUser(id: number) {
    if (id <= 0) {
        throw new Error("Invalid ID");
    }
    return {
        id,
        email: `user${id}@test.com`,
    }
}

module.exports = getUser;
