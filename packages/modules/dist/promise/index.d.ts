declare class NPromise {
    state: "pending" | "fulfilled" | "rejected";
    fulfillReactions: any[];
    rejectReactions: any[];
    isHandled: boolean;
    static PENDING: "pending";
    static FULFILLED: "fulfilled";
    static REJECTED: "rejected";
    constructor(executor: any);
}

export { NPromise };
