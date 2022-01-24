const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(uesrname: String!, email: String!, password String!): Auth
        saveBook(bookId: ID!, authors: [String!], description: String!, image: String!, link: String!, title: String! ): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;