import * as proto from "../generated/protocol";

export const makeDummyTask = (id: number): proto.ITask => {
	return {
    email: `email${id}.com`,
    companyName: `(株)${id}`,
    deadline: `2025-3-${id}`,
    task: `task${id}`,
    submitTo: `submit_to${id}`,
	};
};