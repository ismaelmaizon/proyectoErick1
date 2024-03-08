import passport from "passport";
import jwt from 'passport-jwt';



const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt


export const initializePassportJWT = () => {
    console.log('initializePJWT:');
    passport.use(
        'jwt', 
        new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret'}, // " 'coderSecret' " FIRMA DEL TOKEN
    async(jwt_Payload, done) => {
        console.log('payload:');
        console.log(jwt_Payload);
        try{
            return done(null, jwt_Payload)
        }catch(e){
            return done(e)
        }
    }))
}


const cookieExtractor = (req) => {
    let token = null;
    console.log(req);
    if(req && req.cookies) {
        console.log(req);
        console.log(req.cookies);
        token = req.cookies['CookiePrueba'] // " 'coderCookie' " NOMBRE DE LA COOKIE QUE ESTAMOS GUARDANDO
        console.log('cookie extraida:');
        console.log(token);
    }
    return token;
}