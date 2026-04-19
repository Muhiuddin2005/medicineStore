import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key_for_jwt";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string | number;
                email: string;
                role: string;
            }
        }
    }
}

const auth = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;

            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "You are not authorized! Token is missing."
                });
            }

            let decoded: any;
            try {
                decoded = jwt.verify(token, JWT_SECRET);
            } catch (error) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid or expired token!"
                });
            }

            req.user = decoded;

            if (roles.length && !roles.includes(req.user?.role as string)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden! You don't have permission to access this resource!"
                });
            }

            next();
        } catch (err) {
            next(err);
        }
    };
};

export default auth;
