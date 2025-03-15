import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Task. */
export interface ITask {

    /** Task email */
    email?: (string|null);

    /** Task companyName */
    companyName?: (string|null);

    /** Task deadline */
    deadline?: (string|null);

    /** Task task */
    task?: (string|null);

    /** Task submitTo */
    submitTo?: (string|null);
}

/** Represents a Task. */
export class Task implements ITask {

    /**
     * Constructs a new Task.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITask);

    /** Task email. */
    public email: string;

    /** Task companyName. */
    public companyName: string;

    /** Task deadline. */
    public deadline: string;

    /** Task task. */
    public task: string;

    /** Task submitTo. */
    public submitTo: string;

    /**
     * Creates a new Task instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Task instance
     */
    public static create(properties?: ITask): Task;

    /**
     * Encodes the specified Task message. Does not implicitly {@link Task.verify|verify} messages.
     * @param message Task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Task message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Task;

    /**
     * Creates a Task message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Task
     */
    public static fromObject(object: { [k: string]: any }): Task;

    /**
     * Creates a plain object from a Task message. Also converts values to other types if specified.
     * @param message Task
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Task to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Task
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TaskResponse. */
export interface ITaskResponse {

    /** TaskResponse tasks */
    tasks?: (ITask[]|null);
}

/** Represents a TaskResponse. */
export class TaskResponse implements ITaskResponse {

    /**
     * Constructs a new TaskResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITaskResponse);

    /** TaskResponse tasks. */
    public tasks: ITask[];

    /**
     * Creates a new TaskResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TaskResponse instance
     */
    public static create(properties?: ITaskResponse): TaskResponse;

    /**
     * Encodes the specified TaskResponse message. Does not implicitly {@link TaskResponse.verify|verify} messages.
     * @param message TaskResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITaskResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TaskResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TaskResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaskResponse;

    /**
     * Creates a TaskResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TaskResponse
     */
    public static fromObject(object: { [k: string]: any }): TaskResponse;

    /**
     * Creates a plain object from a TaskResponse message. Also converts values to other types if specified.
     * @param message TaskResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TaskResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TaskResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TaskResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a User. */
export interface IUser {

    /** User id */
    id?: (number|null);

    /** User name */
    name?: (string|null);
}

/** Represents a User. */
export class User implements IUser {

    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser);

    /** User id. */
    public id: number;

    /** User name. */
    public name: string;

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: IUser): User;

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User;

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: User, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for User
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
