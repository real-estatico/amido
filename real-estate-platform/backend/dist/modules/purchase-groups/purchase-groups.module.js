"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseGroupsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const purchase_groups_service_1 = require("./services/purchase-groups.service");
const purchase_groups_controller_1 = require("./controllers/purchase-groups.controller");
const purchase_group_entity_1 = require("./entities/purchase-group.entity");
let PurchaseGroupsModule = class PurchaseGroupsModule {
};
exports.PurchaseGroupsModule = PurchaseGroupsModule;
exports.PurchaseGroupsModule = PurchaseGroupsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([purchase_group_entity_1.PurchaseGroup])],
        controllers: [purchase_groups_controller_1.PurchaseGroupsController],
        providers: [purchase_groups_service_1.PurchaseGroupsService],
        exports: [purchase_groups_service_1.PurchaseGroupsService],
    })
], PurchaseGroupsModule);
//# sourceMappingURL=purchase-groups.module.js.map