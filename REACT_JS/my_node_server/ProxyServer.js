/**
 * Installation d'un proxy
 * 1) itialisez le projet avec "npm init"
 * 2) Installation des dépendances (2)
 * express
 * http-proxy-middleware
 **/

import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = Router();

const options = {
  target: "https://jsonplaceholdeer.typicode.com/users", //  cible hôte
  changeOrigin: true, // besoin pour les sites hôtes virtuels
  pathRewrite: {
    [`^/api/users/all`]: "",
  }, // réécriture du endpoints par '' when forwarded to our target
};

router.get("/all", createProxyMiddleware(options));

/**
 * En utilisant pathRewrite , nous pouvons rendre notre application proxy
 * avec un endpoints "api/users/all"  par une API appelée "jsonplaceholder"
 *
 * Lorsque le clients utilisera le endpoint "api/users/all" via le navigateur ,
 * il recevra une liste d'utilisateurs à partir de la "target "
 */
