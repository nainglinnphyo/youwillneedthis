"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNrcDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_nrc_dto_1 = require("./create-nrc.dto");
class UpdateNrcDto extends (0, mapped_types_1.PartialType)(create_nrc_dto_1.CreateNrcDto) {
}
exports.UpdateNrcDto = UpdateNrcDto;
//# sourceMappingURL=update-nrc.dto.js.map