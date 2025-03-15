/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Task = $root.Task = (() => {

    /**
     * Properties of a Task.
     * @exports ITask
     * @interface ITask
     * @property {string|null} [email] Task email
     * @property {string|null} [companyName] Task companyName
     * @property {string|null} [deadline] Task deadline
     * @property {string|null} [task] Task task
     * @property {string|null} [submitTo] Task submitTo
     */

    /**
     * Constructs a new Task.
     * @exports Task
     * @classdesc Represents a Task.
     * @implements ITask
     * @constructor
     * @param {ITask=} [properties] Properties to set
     */
    function Task(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Task email.
     * @member {string} email
     * @memberof Task
     * @instance
     */
    Task.prototype.email = "";

    /**
     * Task companyName.
     * @member {string} companyName
     * @memberof Task
     * @instance
     */
    Task.prototype.companyName = "";

    /**
     * Task deadline.
     * @member {string} deadline
     * @memberof Task
     * @instance
     */
    Task.prototype.deadline = "";

    /**
     * Task task.
     * @member {string} task
     * @memberof Task
     * @instance
     */
    Task.prototype.task = "";

    /**
     * Task submitTo.
     * @member {string} submitTo
     * @memberof Task
     * @instance
     */
    Task.prototype.submitTo = "";

    /**
     * Creates a new Task instance using the specified properties.
     * @function create
     * @memberof Task
     * @static
     * @param {ITask=} [properties] Properties to set
     * @returns {Task} Task instance
     */
    Task.create = function create(properties) {
        return new Task(properties);
    };

    /**
     * Encodes the specified Task message. Does not implicitly {@link Task.verify|verify} messages.
     * @function encode
     * @memberof Task
     * @static
     * @param {ITask} message Task message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Task.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
        if (message.companyName != null && Object.hasOwnProperty.call(message, "companyName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.companyName);
        if (message.deadline != null && Object.hasOwnProperty.call(message, "deadline"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.deadline);
        if (message.task != null && Object.hasOwnProperty.call(message, "task"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.task);
        if (message.submitTo != null && Object.hasOwnProperty.call(message, "submitTo"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.submitTo);
        return writer;
    };

    /**
     * Decodes a Task message from the specified reader or buffer.
     * @function decode
     * @memberof Task
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Task} Task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Task.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Task();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.email = reader.string();
                    break;
                }
            case 2: {
                    message.companyName = reader.string();
                    break;
                }
            case 3: {
                    message.deadline = reader.string();
                    break;
                }
            case 4: {
                    message.task = reader.string();
                    break;
                }
            case 5: {
                    message.submitTo = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Creates a Task message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Task
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Task} Task
     */
    Task.fromObject = function fromObject(object) {
        if (object instanceof $root.Task)
            return object;
        let message = new $root.Task();
        if (object.email != null)
            message.email = String(object.email);
        if (object.companyName != null)
            message.companyName = String(object.companyName);
        if (object.deadline != null)
            message.deadline = String(object.deadline);
        if (object.task != null)
            message.task = String(object.task);
        if (object.submitTo != null)
            message.submitTo = String(object.submitTo);
        return message;
    };

    /**
     * Creates a plain object from a Task message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Task
     * @static
     * @param {Task} message Task
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Task.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.email = "";
            object.companyName = "";
            object.deadline = "";
            object.task = "";
            object.submitTo = "";
        }
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.companyName != null && message.hasOwnProperty("companyName"))
            object.companyName = message.companyName;
        if (message.deadline != null && message.hasOwnProperty("deadline"))
            object.deadline = message.deadline;
        if (message.task != null && message.hasOwnProperty("task"))
            object.task = message.task;
        if (message.submitTo != null && message.hasOwnProperty("submitTo"))
            object.submitTo = message.submitTo;
        return object;
    };

    /**
     * Converts this Task to JSON.
     * @function toJSON
     * @memberof Task
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Task.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Task
     * @function getTypeUrl
     * @memberof Task
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Task.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Task";
    };

    return Task;
})();

export const TaskResponse = $root.TaskResponse = (() => {

    /**
     * Properties of a TaskResponse.
     * @exports ITaskResponse
     * @interface ITaskResponse
     * @property {Array.<ITask>|null} [tasks] TaskResponse tasks
     */

    /**
     * Constructs a new TaskResponse.
     * @exports TaskResponse
     * @classdesc Represents a TaskResponse.
     * @implements ITaskResponse
     * @constructor
     * @param {ITaskResponse=} [properties] Properties to set
     */
    function TaskResponse(properties) {
        this.tasks = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TaskResponse tasks.
     * @member {Array.<ITask>} tasks
     * @memberof TaskResponse
     * @instance
     */
    TaskResponse.prototype.tasks = $util.emptyArray;

    /**
     * Creates a new TaskResponse instance using the specified properties.
     * @function create
     * @memberof TaskResponse
     * @static
     * @param {ITaskResponse=} [properties] Properties to set
     * @returns {TaskResponse} TaskResponse instance
     */
    TaskResponse.create = function create(properties) {
        return new TaskResponse(properties);
    };

    /**
     * Encodes the specified TaskResponse message. Does not implicitly {@link TaskResponse.verify|verify} messages.
     * @function encode
     * @memberof TaskResponse
     * @static
     * @param {ITaskResponse} message TaskResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tasks != null && message.tasks.length)
            for (let i = 0; i < message.tasks.length; ++i)
                $root.Task.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a TaskResponse message from the specified reader or buffer.
     * @function decode
     * @memberof TaskResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TaskResponse} TaskResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TaskResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.tasks && message.tasks.length))
                        message.tasks = [];
                    message.tasks.push($root.Task.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Creates a TaskResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TaskResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TaskResponse} TaskResponse
     */
    TaskResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.TaskResponse)
            return object;
        let message = new $root.TaskResponse();
        if (object.tasks) {
            if (!Array.isArray(object.tasks))
                throw TypeError(".TaskResponse.tasks: array expected");
            message.tasks = [];
            for (let i = 0; i < object.tasks.length; ++i) {
                if (typeof object.tasks[i] !== "object")
                    throw TypeError(".TaskResponse.tasks: object expected");
                message.tasks[i] = $root.Task.fromObject(object.tasks[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TaskResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TaskResponse
     * @static
     * @param {TaskResponse} message TaskResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TaskResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.tasks = [];
        if (message.tasks && message.tasks.length) {
            object.tasks = [];
            for (let j = 0; j < message.tasks.length; ++j)
                object.tasks[j] = $root.Task.toObject(message.tasks[j], options);
        }
        return object;
    };

    /**
     * Converts this TaskResponse to JSON.
     * @function toJSON
     * @memberof TaskResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TaskResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TaskResponse
     * @function getTypeUrl
     * @memberof TaskResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TaskResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TaskResponse";
    };

    return TaskResponse;
})();

export const User = $root.User = (() => {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {number|null} [id] User id
     * @property {string|null} [name] User name
     */

    /**
     * Constructs a new User.
     * @exports User
     * @classdesc Represents a User.
     * @implements IUser
     * @constructor
     * @param {IUser=} [properties] Properties to set
     */
    function User(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * User id.
     * @member {number} id
     * @memberof User
     * @instance
     */
    User.prototype.id = 0;

    /**
     * User name.
     * @member {string} name
     * @memberof User
     * @instance
     */
    User.prototype.name = "";

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof User
     * @static
     * @param {IUser=} [properties] Properties to set
     * @returns {User} User instance
     */
    User.create = function create(properties) {
        return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @function encode
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.uint32();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User} User
     */
    User.fromObject = function fromObject(object) {
        if (object instanceof $root.User)
            return object;
        let message = new $root.User();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User
     * @static
     * @param {User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for User
     * @function getTypeUrl
     * @memberof User
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/User";
    };

    return User;
})();

export { $root as default };
