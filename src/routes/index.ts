import { Router } from "express";
import { productsRoutes } from "./products-routes";

const routes = Router()
routes.use('/products',productsRoutes)
export {routes}

//index.tsx -> products-routes -> products.controller -> server.ts