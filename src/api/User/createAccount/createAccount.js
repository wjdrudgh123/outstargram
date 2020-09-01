import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation : {
        createAccount : async(_, args) => {
            const { userName, email, firstName = "", lastName = "", bio = "" } = args; //디폴트로 빈 값을 넣어줌
            const user = await prisma.createUser({
                userName,
                email,
                firstName,
                lastName,
                 bio
            });
            return user;
        }
    }
}