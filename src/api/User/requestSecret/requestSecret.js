import { generateSecret } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";
export default {
    Mutation : {
        requestSecret : async(_, args) => {
            const { email } = args;
            const secret = generateSecret();
            console.log(secret);
            try{
                await prisma.updateUser({
                    data:{ 
                        loginSecret : secret 
                    },
                    where : {
                        email:email // email 하나로도 쓸 수 있음(es6)
                    }
                });
                return true;
            }catch(err){
                console.log(err);
                return false;
            }
        }
    }
}