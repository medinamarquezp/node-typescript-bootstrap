import { app } from "./config";
import api from "./interfaces/api";
import { logger } from "./services/logger";

api.listen(app.PORT, () => {
    logger.info(`API running on port ${app.PORT}`);
});