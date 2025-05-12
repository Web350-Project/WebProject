
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usernames
 * 
 */
export type Usernames = $Result.DefaultSelection<Prisma.$UsernamesPayload>
/**
 * Model students
 * 
 */
export type students = $Result.DefaultSelection<Prisma.$studentsPayload>
/**
 * Model courses
 * 
 */
export type courses = $Result.DefaultSelection<Prisma.$coursesPayload>
/**
 * Model classes
 * 
 */
export type classes = $Result.DefaultSelection<Prisma.$classesPayload>
/**
 * Model instructors
 * 
 */
export type instructors = $Result.DefaultSelection<Prisma.$instructorsPayload>
/**
 * Model enrolledCourses
 * 
 */
export type enrolledCourses = $Result.DefaultSelection<Prisma.$enrolledCoursesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Campus: {
  Male: 'Male',
  Female: 'Female'
};

export type Campus = (typeof Campus)[keyof typeof Campus]


export const status: {
  inprogress: 'inprogress',
  pending: 'pending'
};

export type status = (typeof status)[keyof typeof status]


export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Campus = $Enums.Campus

export const Campus: typeof $Enums.Campus

export type status = $Enums.status

export const status: typeof $Enums.status

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usernames
 * const usernames = await prisma.usernames.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usernames
   * const usernames = await prisma.usernames.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usernames`: Exposes CRUD operations for the **Usernames** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usernames
    * const usernames = await prisma.usernames.findMany()
    * ```
    */
  get usernames(): Prisma.UsernamesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.coursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classes`: Exposes CRUD operations for the **classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.classesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructors`: Exposes CRUD operations for the **instructors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructors.findMany()
    * ```
    */
  get instructors(): Prisma.instructorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrolledCourses`: Exposes CRUD operations for the **enrolledCourses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrolledCourses
    * const enrolledCourses = await prisma.enrolledCourses.findMany()
    * ```
    */
  get enrolledCourses(): Prisma.enrolledCoursesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usernames: 'Usernames',
    students: 'students',
    courses: 'courses',
    classes: 'classes',
    instructors: 'instructors',
    enrolledCourses: 'enrolledCourses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usernames" | "students" | "courses" | "classes" | "instructors" | "enrolledCourses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usernames: {
        payload: Prisma.$UsernamesPayload<ExtArgs>
        fields: Prisma.UsernamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsernamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsernamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>
          }
          findFirst: {
            args: Prisma.UsernamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsernamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>
          }
          findMany: {
            args: Prisma.UsernamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>[]
          }
          create: {
            args: Prisma.UsernamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>
          }
          createMany: {
            args: Prisma.UsernamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsernamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>[]
          }
          delete: {
            args: Prisma.UsernamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>
          }
          update: {
            args: Prisma.UsernamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>
          }
          deleteMany: {
            args: Prisma.UsernamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsernamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsernamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>[]
          }
          upsert: {
            args: Prisma.UsernamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamesPayload>
          }
          aggregate: {
            args: Prisma.UsernamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsernames>
          }
          groupBy: {
            args: Prisma.UsernamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsernamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsernamesCountArgs<ExtArgs>
            result: $Utils.Optional<UsernamesCountAggregateOutputType> | number
          }
        }
      }
      students: {
        payload: Prisma.$studentsPayload<ExtArgs>
        fields: Prisma.studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findFirst: {
            args: Prisma.studentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findMany: {
            args: Prisma.studentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          create: {
            args: Prisma.studentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          createMany: {
            args: Prisma.studentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          delete: {
            args: Prisma.studentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          update: {
            args: Prisma.studentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          deleteMany: {
            args: Prisma.studentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          upsert: {
            args: Prisma.studentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.studentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      courses: {
        payload: Prisma.$coursesPayload<ExtArgs>
        fields: Prisma.coursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findFirst: {
            args: Prisma.coursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findMany: {
            args: Prisma.coursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          create: {
            args: Prisma.coursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          createMany: {
            args: Prisma.coursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.coursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          delete: {
            args: Prisma.coursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          update: {
            args: Prisma.coursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          deleteMany: {
            args: Prisma.coursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.coursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          upsert: {
            args: Prisma.coursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.coursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.coursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      classes: {
        payload: Prisma.$classesPayload<ExtArgs>
        fields: Prisma.classesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findFirst: {
            args: Prisma.classesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findMany: {
            args: Prisma.classesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          create: {
            args: Prisma.classesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          createMany: {
            args: Prisma.classesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.classesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          delete: {
            args: Prisma.classesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          update: {
            args: Prisma.classesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          deleteMany: {
            args: Prisma.classesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.classesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          upsert: {
            args: Prisma.classesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          aggregate: {
            args: Prisma.ClassesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasses>
          }
          groupBy: {
            args: Prisma.classesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassesGroupByOutputType>[]
          }
          count: {
            args: Prisma.classesCountArgs<ExtArgs>
            result: $Utils.Optional<ClassesCountAggregateOutputType> | number
          }
        }
      }
      instructors: {
        payload: Prisma.$instructorsPayload<ExtArgs>
        fields: Prisma.instructorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.instructorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.instructorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          findFirst: {
            args: Prisma.instructorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.instructorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          findMany: {
            args: Prisma.instructorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>[]
          }
          create: {
            args: Prisma.instructorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          createMany: {
            args: Prisma.instructorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.instructorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>[]
          }
          delete: {
            args: Prisma.instructorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          update: {
            args: Prisma.instructorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          deleteMany: {
            args: Prisma.instructorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.instructorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.instructorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>[]
          }
          upsert: {
            args: Prisma.instructorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          aggregate: {
            args: Prisma.InstructorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructors>
          }
          groupBy: {
            args: Prisma.instructorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.instructorsCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorsCountAggregateOutputType> | number
          }
        }
      }
      enrolledCourses: {
        payload: Prisma.$enrolledCoursesPayload<ExtArgs>
        fields: Prisma.enrolledCoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrolledCoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrolledCoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>
          }
          findFirst: {
            args: Prisma.enrolledCoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrolledCoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>
          }
          findMany: {
            args: Prisma.enrolledCoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>[]
          }
          create: {
            args: Prisma.enrolledCoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>
          }
          createMany: {
            args: Prisma.enrolledCoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enrolledCoursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>[]
          }
          delete: {
            args: Prisma.enrolledCoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>
          }
          update: {
            args: Prisma.enrolledCoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>
          }
          deleteMany: {
            args: Prisma.enrolledCoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrolledCoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enrolledCoursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>[]
          }
          upsert: {
            args: Prisma.enrolledCoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrolledCoursesPayload>
          }
          aggregate: {
            args: Prisma.EnrolledCoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrolledCourses>
          }
          groupBy: {
            args: Prisma.enrolledCoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrolledCoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrolledCoursesCountArgs<ExtArgs>
            result: $Utils.Optional<EnrolledCoursesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usernames?: UsernamesOmit
    students?: studentsOmit
    courses?: coursesOmit
    classes?: classesOmit
    instructors?: instructorsOmit
    enrolledCourses?: enrolledCoursesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsernamesCountOutputType
   */

  export type UsernamesCountOutputType = {
    students: number
    instructors: number
  }

  export type UsernamesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | UsernamesCountOutputTypeCountStudentsArgs
    instructors?: boolean | UsernamesCountOutputTypeCountInstructorsArgs
  }

  // Custom InputTypes
  /**
   * UsernamesCountOutputType without action
   */
  export type UsernamesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsernamesCountOutputType
     */
    select?: UsernamesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsernamesCountOutputType without action
   */
  export type UsernamesCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
  }

  /**
   * UsernamesCountOutputType without action
   */
  export type UsernamesCountOutputTypeCountInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instructorsWhereInput
  }


  /**
   * Count Type InstructorsCountOutputType
   */

  export type InstructorsCountOutputType = {
    CRNs: number
  }

  export type InstructorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CRNs?: boolean | InstructorsCountOutputTypeCountCRNsArgs
  }

  // Custom InputTypes
  /**
   * InstructorsCountOutputType without action
   */
  export type InstructorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorsCountOutputType
     */
    select?: InstructorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorsCountOutputType without action
   */
  export type InstructorsCountOutputTypeCountCRNsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
  }


  /**
   * Count Type EnrolledCoursesCountOutputType
   */

  export type EnrolledCoursesCountOutputType = {
    course: number
  }

  export type EnrolledCoursesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | EnrolledCoursesCountOutputTypeCountCourseArgs
  }

  // Custom InputTypes
  /**
   * EnrolledCoursesCountOutputType without action
   */
  export type EnrolledCoursesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCoursesCountOutputType
     */
    select?: EnrolledCoursesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnrolledCoursesCountOutputType without action
   */
  export type EnrolledCoursesCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usernames
   */

  export type AggregateUsernames = {
    _count: UsernamesCountAggregateOutputType | null
    _min: UsernamesMinAggregateOutputType | null
    _max: UsernamesMaxAggregateOutputType | null
  }

  export type UsernamesMinAggregateOutputType = {
    username: string | null
    password: string | null
    type: string | null
  }

  export type UsernamesMaxAggregateOutputType = {
    username: string | null
    password: string | null
    type: string | null
  }

  export type UsernamesCountAggregateOutputType = {
    username: number
    password: number
    type: number
    _all: number
  }


  export type UsernamesMinAggregateInputType = {
    username?: true
    password?: true
    type?: true
  }

  export type UsernamesMaxAggregateInputType = {
    username?: true
    password?: true
    type?: true
  }

  export type UsernamesCountAggregateInputType = {
    username?: true
    password?: true
    type?: true
    _all?: true
  }

  export type UsernamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usernames to aggregate.
     */
    where?: UsernamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernamesOrderByWithRelationInput | UsernamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsernamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usernames
    **/
    _count?: true | UsernamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsernamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsernamesMaxAggregateInputType
  }

  export type GetUsernamesAggregateType<T extends UsernamesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsernames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsernames[P]>
      : GetScalarType<T[P], AggregateUsernames[P]>
  }




  export type UsernamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsernamesWhereInput
    orderBy?: UsernamesOrderByWithAggregationInput | UsernamesOrderByWithAggregationInput[]
    by: UsernamesScalarFieldEnum[] | UsernamesScalarFieldEnum
    having?: UsernamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsernamesCountAggregateInputType | true
    _min?: UsernamesMinAggregateInputType
    _max?: UsernamesMaxAggregateInputType
  }

  export type UsernamesGroupByOutputType = {
    username: string
    password: string
    type: string
    _count: UsernamesCountAggregateOutputType | null
    _min: UsernamesMinAggregateOutputType | null
    _max: UsernamesMaxAggregateOutputType | null
  }

  type GetUsernamesGroupByPayload<T extends UsernamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsernamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsernamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsernamesGroupByOutputType[P]>
            : GetScalarType<T[P], UsernamesGroupByOutputType[P]>
        }
      >
    >


  export type UsernamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    password?: boolean
    type?: boolean
    students?: boolean | Usernames$studentsArgs<ExtArgs>
    instructors?: boolean | Usernames$instructorsArgs<ExtArgs>
    _count?: boolean | UsernamesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usernames"]>

  export type UsernamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["usernames"]>

  export type UsernamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["usernames"]>

  export type UsernamesSelectScalar = {
    username?: boolean
    password?: boolean
    type?: boolean
  }

  export type UsernamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "password" | "type", ExtArgs["result"]["usernames"]>
  export type UsernamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Usernames$studentsArgs<ExtArgs>
    instructors?: boolean | Usernames$instructorsArgs<ExtArgs>
    _count?: boolean | UsernamesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsernamesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsernamesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsernamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usernames"
    objects: {
      students: Prisma.$studentsPayload<ExtArgs>[]
      instructors: Prisma.$instructorsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      password: string
      type: string
    }, ExtArgs["result"]["usernames"]>
    composites: {}
  }

  type UsernamesGetPayload<S extends boolean | null | undefined | UsernamesDefaultArgs> = $Result.GetResult<Prisma.$UsernamesPayload, S>

  type UsernamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsernamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsernamesCountAggregateInputType | true
    }

  export interface UsernamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usernames'], meta: { name: 'Usernames' } }
    /**
     * Find zero or one Usernames that matches the filter.
     * @param {UsernamesFindUniqueArgs} args - Arguments to find a Usernames
     * @example
     * // Get one Usernames
     * const usernames = await prisma.usernames.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsernamesFindUniqueArgs>(args: SelectSubset<T, UsernamesFindUniqueArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usernames that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsernamesFindUniqueOrThrowArgs} args - Arguments to find a Usernames
     * @example
     * // Get one Usernames
     * const usernames = await prisma.usernames.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsernamesFindUniqueOrThrowArgs>(args: SelectSubset<T, UsernamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usernames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernamesFindFirstArgs} args - Arguments to find a Usernames
     * @example
     * // Get one Usernames
     * const usernames = await prisma.usernames.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsernamesFindFirstArgs>(args?: SelectSubset<T, UsernamesFindFirstArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usernames that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernamesFindFirstOrThrowArgs} args - Arguments to find a Usernames
     * @example
     * // Get one Usernames
     * const usernames = await prisma.usernames.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsernamesFindFirstOrThrowArgs>(args?: SelectSubset<T, UsernamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usernames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usernames
     * const usernames = await prisma.usernames.findMany()
     * 
     * // Get first 10 Usernames
     * const usernames = await prisma.usernames.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const usernamesWithUsernameOnly = await prisma.usernames.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends UsernamesFindManyArgs>(args?: SelectSubset<T, UsernamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usernames.
     * @param {UsernamesCreateArgs} args - Arguments to create a Usernames.
     * @example
     * // Create one Usernames
     * const Usernames = await prisma.usernames.create({
     *   data: {
     *     // ... data to create a Usernames
     *   }
     * })
     * 
     */
    create<T extends UsernamesCreateArgs>(args: SelectSubset<T, UsernamesCreateArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usernames.
     * @param {UsernamesCreateManyArgs} args - Arguments to create many Usernames.
     * @example
     * // Create many Usernames
     * const usernames = await prisma.usernames.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsernamesCreateManyArgs>(args?: SelectSubset<T, UsernamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usernames and returns the data saved in the database.
     * @param {UsernamesCreateManyAndReturnArgs} args - Arguments to create many Usernames.
     * @example
     * // Create many Usernames
     * const usernames = await prisma.usernames.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usernames and only return the `username`
     * const usernamesWithUsernameOnly = await prisma.usernames.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsernamesCreateManyAndReturnArgs>(args?: SelectSubset<T, UsernamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usernames.
     * @param {UsernamesDeleteArgs} args - Arguments to delete one Usernames.
     * @example
     * // Delete one Usernames
     * const Usernames = await prisma.usernames.delete({
     *   where: {
     *     // ... filter to delete one Usernames
     *   }
     * })
     * 
     */
    delete<T extends UsernamesDeleteArgs>(args: SelectSubset<T, UsernamesDeleteArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usernames.
     * @param {UsernamesUpdateArgs} args - Arguments to update one Usernames.
     * @example
     * // Update one Usernames
     * const usernames = await prisma.usernames.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsernamesUpdateArgs>(args: SelectSubset<T, UsernamesUpdateArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usernames.
     * @param {UsernamesDeleteManyArgs} args - Arguments to filter Usernames to delete.
     * @example
     * // Delete a few Usernames
     * const { count } = await prisma.usernames.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsernamesDeleteManyArgs>(args?: SelectSubset<T, UsernamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usernames
     * const usernames = await prisma.usernames.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsernamesUpdateManyArgs>(args: SelectSubset<T, UsernamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usernames and returns the data updated in the database.
     * @param {UsernamesUpdateManyAndReturnArgs} args - Arguments to update many Usernames.
     * @example
     * // Update many Usernames
     * const usernames = await prisma.usernames.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usernames and only return the `username`
     * const usernamesWithUsernameOnly = await prisma.usernames.updateManyAndReturn({
     *   select: { username: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsernamesUpdateManyAndReturnArgs>(args: SelectSubset<T, UsernamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usernames.
     * @param {UsernamesUpsertArgs} args - Arguments to update or create a Usernames.
     * @example
     * // Update or create a Usernames
     * const usernames = await prisma.usernames.upsert({
     *   create: {
     *     // ... data to create a Usernames
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usernames we want to update
     *   }
     * })
     */
    upsert<T extends UsernamesUpsertArgs>(args: SelectSubset<T, UsernamesUpsertArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernamesCountArgs} args - Arguments to filter Usernames to count.
     * @example
     * // Count the number of Usernames
     * const count = await prisma.usernames.count({
     *   where: {
     *     // ... the filter for the Usernames we want to count
     *   }
     * })
    **/
    count<T extends UsernamesCountArgs>(
      args?: Subset<T, UsernamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsernamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsernamesAggregateArgs>(args: Subset<T, UsernamesAggregateArgs>): Prisma.PrismaPromise<GetUsernamesAggregateType<T>>

    /**
     * Group by Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernamesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsernamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsernamesGroupByArgs['orderBy'] }
        : { orderBy?: UsernamesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsernamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsernamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usernames model
   */
  readonly fields: UsernamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usernames.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsernamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Usernames$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Usernames$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructors<T extends Usernames$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Usernames$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usernames model
   */
  interface UsernamesFieldRefs {
    readonly username: FieldRef<"Usernames", 'String'>
    readonly password: FieldRef<"Usernames", 'String'>
    readonly type: FieldRef<"Usernames", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usernames findUnique
   */
  export type UsernamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * Filter, which Usernames to fetch.
     */
    where: UsernamesWhereUniqueInput
  }

  /**
   * Usernames findUniqueOrThrow
   */
  export type UsernamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * Filter, which Usernames to fetch.
     */
    where: UsernamesWhereUniqueInput
  }

  /**
   * Usernames findFirst
   */
  export type UsernamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * Filter, which Usernames to fetch.
     */
    where?: UsernamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernamesOrderByWithRelationInput | UsernamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usernames.
     */
    cursor?: UsernamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usernames.
     */
    distinct?: UsernamesScalarFieldEnum | UsernamesScalarFieldEnum[]
  }

  /**
   * Usernames findFirstOrThrow
   */
  export type UsernamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * Filter, which Usernames to fetch.
     */
    where?: UsernamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernamesOrderByWithRelationInput | UsernamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usernames.
     */
    cursor?: UsernamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usernames.
     */
    distinct?: UsernamesScalarFieldEnum | UsernamesScalarFieldEnum[]
  }

  /**
   * Usernames findMany
   */
  export type UsernamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * Filter, which Usernames to fetch.
     */
    where?: UsernamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernamesOrderByWithRelationInput | UsernamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usernames.
     */
    cursor?: UsernamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    distinct?: UsernamesScalarFieldEnum | UsernamesScalarFieldEnum[]
  }

  /**
   * Usernames create
   */
  export type UsernamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * The data needed to create a Usernames.
     */
    data: XOR<UsernamesCreateInput, UsernamesUncheckedCreateInput>
  }

  /**
   * Usernames createMany
   */
  export type UsernamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usernames.
     */
    data: UsernamesCreateManyInput | UsernamesCreateManyInput[]
  }

  /**
   * Usernames createManyAndReturn
   */
  export type UsernamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * The data used to create many Usernames.
     */
    data: UsernamesCreateManyInput | UsernamesCreateManyInput[]
  }

  /**
   * Usernames update
   */
  export type UsernamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * The data needed to update a Usernames.
     */
    data: XOR<UsernamesUpdateInput, UsernamesUncheckedUpdateInput>
    /**
     * Choose, which Usernames to update.
     */
    where: UsernamesWhereUniqueInput
  }

  /**
   * Usernames updateMany
   */
  export type UsernamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usernames.
     */
    data: XOR<UsernamesUpdateManyMutationInput, UsernamesUncheckedUpdateManyInput>
    /**
     * Filter which Usernames to update
     */
    where?: UsernamesWhereInput
    /**
     * Limit how many Usernames to update.
     */
    limit?: number
  }

  /**
   * Usernames updateManyAndReturn
   */
  export type UsernamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * The data used to update Usernames.
     */
    data: XOR<UsernamesUpdateManyMutationInput, UsernamesUncheckedUpdateManyInput>
    /**
     * Filter which Usernames to update
     */
    where?: UsernamesWhereInput
    /**
     * Limit how many Usernames to update.
     */
    limit?: number
  }

  /**
   * Usernames upsert
   */
  export type UsernamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * The filter to search for the Usernames to update in case it exists.
     */
    where: UsernamesWhereUniqueInput
    /**
     * In case the Usernames found by the `where` argument doesn't exist, create a new Usernames with this data.
     */
    create: XOR<UsernamesCreateInput, UsernamesUncheckedCreateInput>
    /**
     * In case the Usernames was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsernamesUpdateInput, UsernamesUncheckedUpdateInput>
  }

  /**
   * Usernames delete
   */
  export type UsernamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
    /**
     * Filter which Usernames to delete.
     */
    where: UsernamesWhereUniqueInput
  }

  /**
   * Usernames deleteMany
   */
  export type UsernamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usernames to delete
     */
    where?: UsernamesWhereInput
    /**
     * Limit how many Usernames to delete.
     */
    limit?: number
  }

  /**
   * Usernames.students
   */
  export type Usernames$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Usernames.instructors
   */
  export type Usernames$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    where?: instructorsWhereInput
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    cursor?: instructorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * Usernames without action
   */
  export type UsernamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usernames
     */
    select?: UsernamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usernames
     */
    omit?: UsernamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsernamesInclude<ExtArgs> | null
  }


  /**
   * Model students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    GPA: number | null
  }

  export type StudentsSumAggregateOutputType = {
    GPA: number | null
  }

  export type StudentsMinAggregateOutputType = {
    name: string | null
    id: string | null
    username: string | null
    gender: $Enums.Gender | null
    GPA: number | null
  }

  export type StudentsMaxAggregateOutputType = {
    name: string | null
    id: string | null
    username: string | null
    gender: $Enums.Gender | null
    GPA: number | null
  }

  export type StudentsCountAggregateOutputType = {
    name: number
    id: number
    username: number
    gender: number
    GPA: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    GPA?: true
  }

  export type StudentsSumAggregateInputType = {
    GPA?: true
  }

  export type StudentsMinAggregateInputType = {
    name?: true
    id?: true
    username?: true
    gender?: true
    GPA?: true
  }

  export type StudentsMaxAggregateInputType = {
    name?: true
    id?: true
    username?: true
    gender?: true
    GPA?: true
  }

  export type StudentsCountAggregateInputType = {
    name?: true
    id?: true
    username?: true
    gender?: true
    GPA?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithAggregationInput | studentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    name: string
    id: string
    username: string
    gender: $Enums.Gender
    GPA: number
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    username?: boolean
    gender?: boolean
    GPA?: boolean
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    username?: boolean
    gender?: boolean
    GPA?: boolean
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    username?: boolean
    gender?: boolean
    GPA?: boolean
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectScalar = {
    name?: boolean
    id?: boolean
    username?: boolean
    gender?: boolean
    GPA?: boolean
  }

  export type studentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "id" | "username" | "gender" | "GPA", ExtArgs["result"]["students"]>
  export type studentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }
  export type studentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }
  export type studentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }

  export type $studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students"
    objects: {
      user: Prisma.$UsernamesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      id: string
      username: string
      gender: $Enums.Gender
      GPA: number
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = $Result.GetResult<Prisma.$studentsPayload, S>

  type studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students'], meta: { name: 'students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentsFindUniqueArgs>(args: SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(args: SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentsFindFirstArgs>(args?: SelectSubset<T, studentsFindFirstArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(args?: SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const studentsWithNameOnly = await prisma.students.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends studentsFindManyArgs>(args?: SelectSubset<T, studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends studentsCreateArgs>(args: SelectSubset<T, studentsCreateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentsCreateManyArgs>(args?: SelectSubset<T, studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `name`
     * const studentsWithNameOnly = await prisma.students.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentsCreateManyAndReturnArgs>(args?: SelectSubset<T, studentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends studentsDeleteArgs>(args: SelectSubset<T, studentsDeleteArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentsUpdateArgs>(args: SelectSubset<T, studentsUpdateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentsDeleteManyArgs>(args?: SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentsUpdateManyArgs>(args: SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `name`
     * const studentsWithNameOnly = await prisma.students.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends studentsUpdateManyAndReturnArgs>(args: SelectSubset<T, studentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends studentsUpsertArgs>(args: SelectSubset<T, studentsUpsertArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentsGroupByArgs['orderBy'] }
        : { orderBy?: studentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students model
   */
  readonly fields: studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsernamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsernamesDefaultArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the students model
   */
  interface studentsFieldRefs {
    readonly name: FieldRef<"students", 'String'>
    readonly id: FieldRef<"students", 'String'>
    readonly username: FieldRef<"students", 'String'>
    readonly gender: FieldRef<"students", 'Gender'>
    readonly GPA: FieldRef<"students", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * students findUnique
   */
  export type studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findFirst
   */
  export type studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findMany
   */
  export type studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students create
   */
  export type studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }

  /**
   * students createMany
   */
  export type studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
  }

  /**
   * students createManyAndReturn
   */
  export type studentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * students update
   */
  export type studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * students updateManyAndReturn
   */
  export type studentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * students upsert
   */
  export type studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }

  /**
   * students delete
   */
  export type studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * students without action
   */
  export type studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
  }


  /**
   * Model courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    CH: number | null
    enrolledCoursesCRN: number | null
  }

  export type CoursesSumAggregateOutputType = {
    CH: number | null
    enrolledCoursesCRN: number | null
  }

  export type CoursesMinAggregateOutputType = {
    CName: string | null
    CNo: string | null
    Category: string | null
    CH: number | null
    status: $Enums.status | null
    instructorsUsername: string | null
    enrolledCoursesUsername: string | null
    enrolledCoursesCRN: number | null
  }

  export type CoursesMaxAggregateOutputType = {
    CName: string | null
    CNo: string | null
    Category: string | null
    CH: number | null
    status: $Enums.status | null
    instructorsUsername: string | null
    enrolledCoursesUsername: string | null
    enrolledCoursesCRN: number | null
  }

  export type CoursesCountAggregateOutputType = {
    CName: number
    CNo: number
    Category: number
    CH: number
    status: number
    instructorsUsername: number
    enrolledCoursesUsername: number
    enrolledCoursesCRN: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    CH?: true
    enrolledCoursesCRN?: true
  }

  export type CoursesSumAggregateInputType = {
    CH?: true
    enrolledCoursesCRN?: true
  }

  export type CoursesMinAggregateInputType = {
    CName?: true
    CNo?: true
    Category?: true
    CH?: true
    status?: true
    instructorsUsername?: true
    enrolledCoursesUsername?: true
    enrolledCoursesCRN?: true
  }

  export type CoursesMaxAggregateInputType = {
    CName?: true
    CNo?: true
    Category?: true
    CH?: true
    status?: true
    instructorsUsername?: true
    enrolledCoursesUsername?: true
    enrolledCoursesCRN?: true
  }

  export type CoursesCountAggregateInputType = {
    CName?: true
    CNo?: true
    Category?: true
    CH?: true
    status?: true
    instructorsUsername?: true
    enrolledCoursesUsername?: true
    enrolledCoursesCRN?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to aggregate.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type coursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithAggregationInput | coursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: coursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    instructorsUsername: string | null
    enrolledCoursesUsername: string | null
    enrolledCoursesCRN: number | null
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends coursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type coursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CName?: boolean
    CNo?: boolean
    Category?: boolean
    CH?: boolean
    status?: boolean
    instructorsUsername?: boolean
    enrolledCoursesUsername?: boolean
    enrolledCoursesCRN?: boolean
    instructors?: boolean | courses$instructorsArgs<ExtArgs>
    enrolledCourses?: boolean | courses$enrolledCoursesArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CName?: boolean
    CNo?: boolean
    Category?: boolean
    CH?: boolean
    status?: boolean
    instructorsUsername?: boolean
    enrolledCoursesUsername?: boolean
    enrolledCoursesCRN?: boolean
    instructors?: boolean | courses$instructorsArgs<ExtArgs>
    enrolledCourses?: boolean | courses$enrolledCoursesArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CName?: boolean
    CNo?: boolean
    Category?: boolean
    CH?: boolean
    status?: boolean
    instructorsUsername?: boolean
    enrolledCoursesUsername?: boolean
    enrolledCoursesCRN?: boolean
    instructors?: boolean | courses$instructorsArgs<ExtArgs>
    enrolledCourses?: boolean | courses$enrolledCoursesArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectScalar = {
    CName?: boolean
    CNo?: boolean
    Category?: boolean
    CH?: boolean
    status?: boolean
    instructorsUsername?: boolean
    enrolledCoursesUsername?: boolean
    enrolledCoursesCRN?: boolean
  }

  export type coursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CName" | "CNo" | "Category" | "CH" | "status" | "instructorsUsername" | "enrolledCoursesUsername" | "enrolledCoursesCRN", ExtArgs["result"]["courses"]>
  export type coursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | courses$instructorsArgs<ExtArgs>
    enrolledCourses?: boolean | courses$enrolledCoursesArgs<ExtArgs>
  }
  export type coursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | courses$instructorsArgs<ExtArgs>
    enrolledCourses?: boolean | courses$enrolledCoursesArgs<ExtArgs>
  }
  export type coursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | courses$instructorsArgs<ExtArgs>
    enrolledCourses?: boolean | courses$enrolledCoursesArgs<ExtArgs>
  }

  export type $coursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "courses"
    objects: {
      instructors: Prisma.$instructorsPayload<ExtArgs> | null
      enrolledCourses: Prisma.$enrolledCoursesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      CName: string
      CNo: string
      Category: string
      CH: number
      status: $Enums.status
      instructorsUsername: string | null
      enrolledCoursesUsername: string | null
      enrolledCoursesCRN: number | null
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type coursesGetPayload<S extends boolean | null | undefined | coursesDefaultArgs> = $Result.GetResult<Prisma.$coursesPayload, S>

  type coursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<coursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface coursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['courses'], meta: { name: 'courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {coursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coursesFindUniqueArgs>(args: SelectSubset<T, coursesFindUniqueArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {coursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coursesFindUniqueOrThrowArgs>(args: SelectSubset<T, coursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coursesFindFirstArgs>(args?: SelectSubset<T, coursesFindFirstArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coursesFindFirstOrThrowArgs>(args?: SelectSubset<T, coursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `CName`
     * const coursesWithCNameOnly = await prisma.courses.findMany({ select: { CName: true } })
     * 
     */
    findMany<T extends coursesFindManyArgs>(args?: SelectSubset<T, coursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {coursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends coursesCreateArgs>(args: SelectSubset<T, coursesCreateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {coursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coursesCreateManyArgs>(args?: SelectSubset<T, coursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {coursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `CName`
     * const coursesWithCNameOnly = await prisma.courses.createManyAndReturn({
     *   select: { CName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends coursesCreateManyAndReturnArgs>(args?: SelectSubset<T, coursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {coursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends coursesDeleteArgs>(args: SelectSubset<T, coursesDeleteArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {coursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coursesUpdateArgs>(args: SelectSubset<T, coursesUpdateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {coursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coursesDeleteManyArgs>(args?: SelectSubset<T, coursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coursesUpdateManyArgs>(args: SelectSubset<T, coursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {coursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `CName`
     * const coursesWithCNameOnly = await prisma.courses.updateManyAndReturn({
     *   select: { CName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends coursesUpdateManyAndReturnArgs>(args: SelectSubset<T, coursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {coursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends coursesUpsertArgs>(args: SelectSubset<T, coursesUpsertArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends coursesCountArgs>(
      args?: Subset<T, coursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends coursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coursesGroupByArgs['orderBy'] }
        : { orderBy?: coursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, coursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the courses model
   */
  readonly fields: coursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructors<T extends courses$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, courses$instructorsArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrolledCourses<T extends courses$enrolledCoursesArgs<ExtArgs> = {}>(args?: Subset<T, courses$enrolledCoursesArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the courses model
   */
  interface coursesFieldRefs {
    readonly CName: FieldRef<"courses", 'String'>
    readonly CNo: FieldRef<"courses", 'String'>
    readonly Category: FieldRef<"courses", 'String'>
    readonly CH: FieldRef<"courses", 'Int'>
    readonly status: FieldRef<"courses", 'status'>
    readonly instructorsUsername: FieldRef<"courses", 'String'>
    readonly enrolledCoursesUsername: FieldRef<"courses", 'String'>
    readonly enrolledCoursesCRN: FieldRef<"courses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * courses findUnique
   */
  export type coursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findUniqueOrThrow
   */
  export type coursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findFirst
   */
  export type coursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findFirstOrThrow
   */
  export type coursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findMany
   */
  export type coursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses create
   */
  export type coursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to create a courses.
     */
    data: XOR<coursesCreateInput, coursesUncheckedCreateInput>
  }

  /**
   * courses createMany
   */
  export type coursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
  }

  /**
   * courses createManyAndReturn
   */
  export type coursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * courses update
   */
  export type coursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to update a courses.
     */
    data: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
    /**
     * Choose, which courses to update.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses updateMany
   */
  export type coursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * courses updateManyAndReturn
   */
  export type coursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * courses upsert
   */
  export type coursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The filter to search for the courses to update in case it exists.
     */
    where: coursesWhereUniqueInput
    /**
     * In case the courses found by the `where` argument doesn't exist, create a new courses with this data.
     */
    create: XOR<coursesCreateInput, coursesUncheckedCreateInput>
    /**
     * In case the courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
  }

  /**
   * courses delete
   */
  export type coursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter which courses to delete.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses deleteMany
   */
  export type coursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * courses.instructors
   */
  export type courses$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    where?: instructorsWhereInput
  }

  /**
   * courses.enrolledCourses
   */
  export type courses$enrolledCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    where?: enrolledCoursesWhereInput
  }

  /**
   * courses without action
   */
  export type coursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
  }


  /**
   * Model classes
   */

  export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null
    _avg: ClassesAvgAggregateOutputType | null
    _sum: ClassesSumAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  export type ClassesAvgAggregateOutputType = {
    CH: number | null
    CRN: number | null
  }

  export type ClassesSumAggregateOutputType = {
    CH: number | null
    CRN: number | null
  }

  export type ClassesMinAggregateOutputType = {
    CName: string | null
    img: string | null
    CNo: string | null
    Category: string | null
    Section: string | null
    CH: number | null
    status: $Enums.status | null
    Campus: $Enums.Campus | null
    Seats: string | null
    CRN: number | null
  }

  export type ClassesMaxAggregateOutputType = {
    CName: string | null
    img: string | null
    CNo: string | null
    Category: string | null
    Section: string | null
    CH: number | null
    status: $Enums.status | null
    Campus: $Enums.Campus | null
    Seats: string | null
    CRN: number | null
  }

  export type ClassesCountAggregateOutputType = {
    CName: number
    img: number
    CNo: number
    Category: number
    Section: number
    CH: number
    status: number
    Campus: number
    Seats: number
    CRN: number
    _all: number
  }


  export type ClassesAvgAggregateInputType = {
    CH?: true
    CRN?: true
  }

  export type ClassesSumAggregateInputType = {
    CH?: true
    CRN?: true
  }

  export type ClassesMinAggregateInputType = {
    CName?: true
    img?: true
    CNo?: true
    Category?: true
    Section?: true
    CH?: true
    status?: true
    Campus?: true
    Seats?: true
    CRN?: true
  }

  export type ClassesMaxAggregateInputType = {
    CName?: true
    img?: true
    CNo?: true
    Category?: true
    Section?: true
    CH?: true
    status?: true
    Campus?: true
    Seats?: true
    CRN?: true
  }

  export type ClassesCountAggregateInputType = {
    CName?: true
    img?: true
    CNo?: true
    Category?: true
    Section?: true
    CH?: true
    status?: true
    Campus?: true
    Seats?: true
    CRN?: true
    _all?: true
  }

  export type ClassesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to aggregate.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classes
    **/
    _count?: true | ClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType
  }

  export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
        [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasses[P]>
      : GetScalarType<T[P], AggregateClasses[P]>
  }




  export type classesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classesWhereInput
    orderBy?: classesOrderByWithAggregationInput | classesOrderByWithAggregationInput[]
    by: ClassesScalarFieldEnum[] | ClassesScalarFieldEnum
    having?: classesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassesCountAggregateInputType | true
    _avg?: ClassesAvgAggregateInputType
    _sum?: ClassesSumAggregateInputType
    _min?: ClassesMinAggregateInputType
    _max?: ClassesMaxAggregateInputType
  }

  export type ClassesGroupByOutputType = {
    CName: string
    img: string
    CNo: string
    Category: string
    Section: string
    CH: number
    status: $Enums.status
    Campus: $Enums.Campus
    Seats: string
    CRN: number
    _count: ClassesCountAggregateOutputType | null
    _avg: ClassesAvgAggregateOutputType | null
    _sum: ClassesSumAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  type GetClassesGroupByPayload<T extends classesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassesGroupByOutputType[P]>
            : GetScalarType<T[P], ClassesGroupByOutputType[P]>
        }
      >
    >


  export type classesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CName?: boolean
    img?: boolean
    CNo?: boolean
    Category?: boolean
    Section?: boolean
    CH?: boolean
    status?: boolean
    Campus?: boolean
    Seats?: boolean
    CRN?: boolean
  }, ExtArgs["result"]["classes"]>

  export type classesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CName?: boolean
    img?: boolean
    CNo?: boolean
    Category?: boolean
    Section?: boolean
    CH?: boolean
    status?: boolean
    Campus?: boolean
    Seats?: boolean
    CRN?: boolean
  }, ExtArgs["result"]["classes"]>

  export type classesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CName?: boolean
    img?: boolean
    CNo?: boolean
    Category?: boolean
    Section?: boolean
    CH?: boolean
    status?: boolean
    Campus?: boolean
    Seats?: boolean
    CRN?: boolean
  }, ExtArgs["result"]["classes"]>

  export type classesSelectScalar = {
    CName?: boolean
    img?: boolean
    CNo?: boolean
    Category?: boolean
    Section?: boolean
    CH?: boolean
    status?: boolean
    Campus?: boolean
    Seats?: boolean
    CRN?: boolean
  }

  export type classesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CName" | "img" | "CNo" | "Category" | "Section" | "CH" | "status" | "Campus" | "Seats" | "CRN", ExtArgs["result"]["classes"]>

  export type $classesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CName: string
      img: string
      CNo: string
      Category: string
      Section: string
      CH: number
      status: $Enums.status
      Campus: $Enums.Campus
      Seats: string
      CRN: number
    }, ExtArgs["result"]["classes"]>
    composites: {}
  }

  type classesGetPayload<S extends boolean | null | undefined | classesDefaultArgs> = $Result.GetResult<Prisma.$classesPayload, S>

  type classesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassesCountAggregateInputType | true
    }

  export interface classesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classes'], meta: { name: 'classes' } }
    /**
     * Find zero or one Classes that matches the filter.
     * @param {classesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classesFindUniqueArgs>(args: SelectSubset<T, classesFindUniqueArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classesFindUniqueOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classesFindUniqueOrThrowArgs>(args: SelectSubset<T, classesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classesFindFirstArgs>(args?: SelectSubset<T, classesFindFirstArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classesFindFirstOrThrowArgs>(args?: SelectSubset<T, classesFindFirstOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     * 
     * // Only select the `CName`
     * const classesWithCNameOnly = await prisma.classes.findMany({ select: { CName: true } })
     * 
     */
    findMany<T extends classesFindManyArgs>(args?: SelectSubset<T, classesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classes.
     * @param {classesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     * 
     */
    create<T extends classesCreateArgs>(args: SelectSubset<T, classesCreateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {classesCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classesCreateManyArgs>(args?: SelectSubset<T, classesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {classesCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `CName`
     * const classesWithCNameOnly = await prisma.classes.createManyAndReturn({
     *   select: { CName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends classesCreateManyAndReturnArgs>(args?: SelectSubset<T, classesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classes.
     * @param {classesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     * 
     */
    delete<T extends classesDeleteArgs>(args: SelectSubset<T, classesDeleteArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classes.
     * @param {classesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classesUpdateArgs>(args: SelectSubset<T, classesUpdateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {classesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classesDeleteManyArgs>(args?: SelectSubset<T, classesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classesUpdateManyArgs>(args: SelectSubset<T, classesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {classesUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `CName`
     * const classesWithCNameOnly = await prisma.classes.updateManyAndReturn({
     *   select: { CName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends classesUpdateManyAndReturnArgs>(args: SelectSubset<T, classesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classes.
     * @param {classesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
     */
    upsert<T extends classesUpsertArgs>(args: SelectSubset<T, classesUpsertArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends classesCountArgs>(
      args?: Subset<T, classesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassesAggregateArgs>(args: Subset<T, ClassesAggregateArgs>): Prisma.PrismaPromise<GetClassesAggregateType<T>>

    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends classesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classesGroupByArgs['orderBy'] }
        : { orderBy?: classesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, classesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classes model
   */
  readonly fields: classesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the classes model
   */
  interface classesFieldRefs {
    readonly CName: FieldRef<"classes", 'String'>
    readonly img: FieldRef<"classes", 'String'>
    readonly CNo: FieldRef<"classes", 'String'>
    readonly Category: FieldRef<"classes", 'String'>
    readonly Section: FieldRef<"classes", 'String'>
    readonly CH: FieldRef<"classes", 'Int'>
    readonly status: FieldRef<"classes", 'status'>
    readonly Campus: FieldRef<"classes", 'Campus'>
    readonly Seats: FieldRef<"classes", 'String'>
    readonly CRN: FieldRef<"classes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * classes findUnique
   */
  export type classesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findUniqueOrThrow
   */
  export type classesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findFirst
   */
  export type classesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findFirstOrThrow
   */
  export type classesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findMany
   */
  export type classesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes create
   */
  export type classesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * The data needed to create a classes.
     */
    data: XOR<classesCreateInput, classesUncheckedCreateInput>
  }

  /**
   * classes createMany
   */
  export type classesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classes.
     */
    data: classesCreateManyInput | classesCreateManyInput[]
  }

  /**
   * classes createManyAndReturn
   */
  export type classesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * The data used to create many classes.
     */
    data: classesCreateManyInput | classesCreateManyInput[]
  }

  /**
   * classes update
   */
  export type classesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * The data needed to update a classes.
     */
    data: XOR<classesUpdateInput, classesUncheckedUpdateInput>
    /**
     * Choose, which classes to update.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes updateMany
   */
  export type classesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classes.
     */
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classes updateManyAndReturn
   */
  export type classesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * The data used to update classes.
     */
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classes upsert
   */
  export type classesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * The filter to search for the classes to update in case it exists.
     */
    where: classesWhereUniqueInput
    /**
     * In case the classes found by the `where` argument doesn't exist, create a new classes with this data.
     */
    create: XOR<classesCreateInput, classesUncheckedCreateInput>
    /**
     * In case the classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classesUpdateInput, classesUncheckedUpdateInput>
  }

  /**
   * classes delete
   */
  export type classesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Filter which classes to delete.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes deleteMany
   */
  export type classesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to delete
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to delete.
     */
    limit?: number
  }

  /**
   * classes without action
   */
  export type classesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
  }


  /**
   * Model instructors
   */

  export type AggregateInstructors = {
    _count: InstructorsCountAggregateOutputType | null
    _min: InstructorsMinAggregateOutputType | null
    _max: InstructorsMaxAggregateOutputType | null
  }

  export type InstructorsMinAggregateOutputType = {
    name: string | null
    username: string | null
    expertise: string | null
  }

  export type InstructorsMaxAggregateOutputType = {
    name: string | null
    username: string | null
    expertise: string | null
  }

  export type InstructorsCountAggregateOutputType = {
    name: number
    username: number
    expertise: number
    _all: number
  }


  export type InstructorsMinAggregateInputType = {
    name?: true
    username?: true
    expertise?: true
  }

  export type InstructorsMaxAggregateInputType = {
    name?: true
    username?: true
    expertise?: true
  }

  export type InstructorsCountAggregateInputType = {
    name?: true
    username?: true
    expertise?: true
    _all?: true
  }

  export type InstructorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instructors to aggregate.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned instructors
    **/
    _count?: true | InstructorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorsMaxAggregateInputType
  }

  export type GetInstructorsAggregateType<T extends InstructorsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructors[P]>
      : GetScalarType<T[P], AggregateInstructors[P]>
  }




  export type instructorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instructorsWhereInput
    orderBy?: instructorsOrderByWithAggregationInput | instructorsOrderByWithAggregationInput[]
    by: InstructorsScalarFieldEnum[] | InstructorsScalarFieldEnum
    having?: instructorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorsCountAggregateInputType | true
    _min?: InstructorsMinAggregateInputType
    _max?: InstructorsMaxAggregateInputType
  }

  export type InstructorsGroupByOutputType = {
    name: string
    username: string
    expertise: string
    _count: InstructorsCountAggregateOutputType | null
    _min: InstructorsMinAggregateOutputType | null
    _max: InstructorsMaxAggregateOutputType | null
  }

  type GetInstructorsGroupByPayload<T extends instructorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorsGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorsGroupByOutputType[P]>
        }
      >
    >


  export type instructorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    username?: boolean
    expertise?: boolean
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
    CRNs?: boolean | instructors$CRNsArgs<ExtArgs>
    _count?: boolean | InstructorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructors"]>

  export type instructorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    username?: boolean
    expertise?: boolean
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructors"]>

  export type instructorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    username?: boolean
    expertise?: boolean
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructors"]>

  export type instructorsSelectScalar = {
    name?: boolean
    username?: boolean
    expertise?: boolean
  }

  export type instructorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "username" | "expertise", ExtArgs["result"]["instructors"]>
  export type instructorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
    CRNs?: boolean | instructors$CRNsArgs<ExtArgs>
    _count?: boolean | InstructorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type instructorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }
  export type instructorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsernamesDefaultArgs<ExtArgs>
  }

  export type $instructorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "instructors"
    objects: {
      user: Prisma.$UsernamesPayload<ExtArgs>
      CRNs: Prisma.$coursesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      username: string
      expertise: string
    }, ExtArgs["result"]["instructors"]>
    composites: {}
  }

  type instructorsGetPayload<S extends boolean | null | undefined | instructorsDefaultArgs> = $Result.GetResult<Prisma.$instructorsPayload, S>

  type instructorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<instructorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorsCountAggregateInputType | true
    }

  export interface instructorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['instructors'], meta: { name: 'instructors' } }
    /**
     * Find zero or one Instructors that matches the filter.
     * @param {instructorsFindUniqueArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instructorsFindUniqueArgs>(args: SelectSubset<T, instructorsFindUniqueArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {instructorsFindUniqueOrThrowArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instructorsFindUniqueOrThrowArgs>(args: SelectSubset<T, instructorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindFirstArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instructorsFindFirstArgs>(args?: SelectSubset<T, instructorsFindFirstArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindFirstOrThrowArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instructorsFindFirstOrThrowArgs>(args?: SelectSubset<T, instructorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructors.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructors.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const instructorsWithNameOnly = await prisma.instructors.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends instructorsFindManyArgs>(args?: SelectSubset<T, instructorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructors.
     * @param {instructorsCreateArgs} args - Arguments to create a Instructors.
     * @example
     * // Create one Instructors
     * const Instructors = await prisma.instructors.create({
     *   data: {
     *     // ... data to create a Instructors
     *   }
     * })
     * 
     */
    create<T extends instructorsCreateArgs>(args: SelectSubset<T, instructorsCreateArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {instructorsCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructors = await prisma.instructors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends instructorsCreateManyArgs>(args?: SelectSubset<T, instructorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {instructorsCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructors = await prisma.instructors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `name`
     * const instructorsWithNameOnly = await prisma.instructors.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends instructorsCreateManyAndReturnArgs>(args?: SelectSubset<T, instructorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructors.
     * @param {instructorsDeleteArgs} args - Arguments to delete one Instructors.
     * @example
     * // Delete one Instructors
     * const Instructors = await prisma.instructors.delete({
     *   where: {
     *     // ... filter to delete one Instructors
     *   }
     * })
     * 
     */
    delete<T extends instructorsDeleteArgs>(args: SelectSubset<T, instructorsDeleteArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructors.
     * @param {instructorsUpdateArgs} args - Arguments to update one Instructors.
     * @example
     * // Update one Instructors
     * const instructors = await prisma.instructors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends instructorsUpdateArgs>(args: SelectSubset<T, instructorsUpdateArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {instructorsDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends instructorsDeleteManyArgs>(args?: SelectSubset<T, instructorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructors = await prisma.instructors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends instructorsUpdateManyArgs>(args: SelectSubset<T, instructorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {instructorsUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructors = await prisma.instructors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `name`
     * const instructorsWithNameOnly = await prisma.instructors.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends instructorsUpdateManyAndReturnArgs>(args: SelectSubset<T, instructorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructors.
     * @param {instructorsUpsertArgs} args - Arguments to update or create a Instructors.
     * @example
     * // Update or create a Instructors
     * const instructors = await prisma.instructors.upsert({
     *   create: {
     *     // ... data to create a Instructors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructors we want to update
     *   }
     * })
     */
    upsert<T extends instructorsUpsertArgs>(args: SelectSubset<T, instructorsUpsertArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructors.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends instructorsCountArgs>(
      args?: Subset<T, instructorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorsAggregateArgs>(args: Subset<T, InstructorsAggregateArgs>): Prisma.PrismaPromise<GetInstructorsAggregateType<T>>

    /**
     * Group by Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends instructorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: instructorsGroupByArgs['orderBy'] }
        : { orderBy?: instructorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, instructorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the instructors model
   */
  readonly fields: instructorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for instructors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__instructorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsernamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsernamesDefaultArgs<ExtArgs>>): Prisma__UsernamesClient<$Result.GetResult<Prisma.$UsernamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CRNs<T extends instructors$CRNsArgs<ExtArgs> = {}>(args?: Subset<T, instructors$CRNsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the instructors model
   */
  interface instructorsFieldRefs {
    readonly name: FieldRef<"instructors", 'String'>
    readonly username: FieldRef<"instructors", 'String'>
    readonly expertise: FieldRef<"instructors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * instructors findUnique
   */
  export type instructorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors findUniqueOrThrow
   */
  export type instructorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors findFirst
   */
  export type instructorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instructors.
     */
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors findFirstOrThrow
   */
  export type instructorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instructors.
     */
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors findMany
   */
  export type instructorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors create
   */
  export type instructorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * The data needed to create a instructors.
     */
    data: XOR<instructorsCreateInput, instructorsUncheckedCreateInput>
  }

  /**
   * instructors createMany
   */
  export type instructorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many instructors.
     */
    data: instructorsCreateManyInput | instructorsCreateManyInput[]
  }

  /**
   * instructors createManyAndReturn
   */
  export type instructorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * The data used to create many instructors.
     */
    data: instructorsCreateManyInput | instructorsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * instructors update
   */
  export type instructorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * The data needed to update a instructors.
     */
    data: XOR<instructorsUpdateInput, instructorsUncheckedUpdateInput>
    /**
     * Choose, which instructors to update.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors updateMany
   */
  export type instructorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update instructors.
     */
    data: XOR<instructorsUpdateManyMutationInput, instructorsUncheckedUpdateManyInput>
    /**
     * Filter which instructors to update
     */
    where?: instructorsWhereInput
    /**
     * Limit how many instructors to update.
     */
    limit?: number
  }

  /**
   * instructors updateManyAndReturn
   */
  export type instructorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * The data used to update instructors.
     */
    data: XOR<instructorsUpdateManyMutationInput, instructorsUncheckedUpdateManyInput>
    /**
     * Filter which instructors to update
     */
    where?: instructorsWhereInput
    /**
     * Limit how many instructors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * instructors upsert
   */
  export type instructorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * The filter to search for the instructors to update in case it exists.
     */
    where: instructorsWhereUniqueInput
    /**
     * In case the instructors found by the `where` argument doesn't exist, create a new instructors with this data.
     */
    create: XOR<instructorsCreateInput, instructorsUncheckedCreateInput>
    /**
     * In case the instructors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<instructorsUpdateInput, instructorsUncheckedUpdateInput>
  }

  /**
   * instructors delete
   */
  export type instructorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter which instructors to delete.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors deleteMany
   */
  export type instructorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instructors to delete
     */
    where?: instructorsWhereInput
    /**
     * Limit how many instructors to delete.
     */
    limit?: number
  }

  /**
   * instructors.CRNs
   */
  export type instructors$CRNsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    cursor?: coursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * instructors without action
   */
  export type instructorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
  }


  /**
   * Model enrolledCourses
   */

  export type AggregateEnrolledCourses = {
    _count: EnrolledCoursesCountAggregateOutputType | null
    _avg: EnrolledCoursesAvgAggregateOutputType | null
    _sum: EnrolledCoursesSumAggregateOutputType | null
    _min: EnrolledCoursesMinAggregateOutputType | null
    _max: EnrolledCoursesMaxAggregateOutputType | null
  }

  export type EnrolledCoursesAvgAggregateOutputType = {
    CRN: number | null
  }

  export type EnrolledCoursesSumAggregateOutputType = {
    CRN: number | null
  }

  export type EnrolledCoursesMinAggregateOutputType = {
    username: string | null
    CRN: number | null
    Grade: string | null
  }

  export type EnrolledCoursesMaxAggregateOutputType = {
    username: string | null
    CRN: number | null
    Grade: string | null
  }

  export type EnrolledCoursesCountAggregateOutputType = {
    username: number
    CRN: number
    Grade: number
    _all: number
  }


  export type EnrolledCoursesAvgAggregateInputType = {
    CRN?: true
  }

  export type EnrolledCoursesSumAggregateInputType = {
    CRN?: true
  }

  export type EnrolledCoursesMinAggregateInputType = {
    username?: true
    CRN?: true
    Grade?: true
  }

  export type EnrolledCoursesMaxAggregateInputType = {
    username?: true
    CRN?: true
    Grade?: true
  }

  export type EnrolledCoursesCountAggregateInputType = {
    username?: true
    CRN?: true
    Grade?: true
    _all?: true
  }

  export type EnrolledCoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrolledCourses to aggregate.
     */
    where?: enrolledCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolledCourses to fetch.
     */
    orderBy?: enrolledCoursesOrderByWithRelationInput | enrolledCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrolledCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolledCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrolledCourses
    **/
    _count?: true | EnrolledCoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrolledCoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrolledCoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolledCoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolledCoursesMaxAggregateInputType
  }

  export type GetEnrolledCoursesAggregateType<T extends EnrolledCoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolledCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolledCourses[P]>
      : GetScalarType<T[P], AggregateEnrolledCourses[P]>
  }




  export type enrolledCoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrolledCoursesWhereInput
    orderBy?: enrolledCoursesOrderByWithAggregationInput | enrolledCoursesOrderByWithAggregationInput[]
    by: EnrolledCoursesScalarFieldEnum[] | EnrolledCoursesScalarFieldEnum
    having?: enrolledCoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolledCoursesCountAggregateInputType | true
    _avg?: EnrolledCoursesAvgAggregateInputType
    _sum?: EnrolledCoursesSumAggregateInputType
    _min?: EnrolledCoursesMinAggregateInputType
    _max?: EnrolledCoursesMaxAggregateInputType
  }

  export type EnrolledCoursesGroupByOutputType = {
    username: string
    CRN: number
    Grade: string
    _count: EnrolledCoursesCountAggregateOutputType | null
    _avg: EnrolledCoursesAvgAggregateOutputType | null
    _sum: EnrolledCoursesSumAggregateOutputType | null
    _min: EnrolledCoursesMinAggregateOutputType | null
    _max: EnrolledCoursesMaxAggregateOutputType | null
  }

  type GetEnrolledCoursesGroupByPayload<T extends enrolledCoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrolledCoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolledCoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolledCoursesGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolledCoursesGroupByOutputType[P]>
        }
      >
    >


  export type enrolledCoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    CRN?: boolean
    Grade?: boolean
    course?: boolean | enrolledCourses$courseArgs<ExtArgs>
    _count?: boolean | EnrolledCoursesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledCourses"]>

  export type enrolledCoursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    CRN?: boolean
    Grade?: boolean
  }, ExtArgs["result"]["enrolledCourses"]>

  export type enrolledCoursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    CRN?: boolean
    Grade?: boolean
  }, ExtArgs["result"]["enrolledCourses"]>

  export type enrolledCoursesSelectScalar = {
    username?: boolean
    CRN?: boolean
    Grade?: boolean
  }

  export type enrolledCoursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "CRN" | "Grade", ExtArgs["result"]["enrolledCourses"]>
  export type enrolledCoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | enrolledCourses$courseArgs<ExtArgs>
    _count?: boolean | EnrolledCoursesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type enrolledCoursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type enrolledCoursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $enrolledCoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrolledCourses"
    objects: {
      course: Prisma.$coursesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      CRN: number
      Grade: string
    }, ExtArgs["result"]["enrolledCourses"]>
    composites: {}
  }

  type enrolledCoursesGetPayload<S extends boolean | null | undefined | enrolledCoursesDefaultArgs> = $Result.GetResult<Prisma.$enrolledCoursesPayload, S>

  type enrolledCoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrolledCoursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrolledCoursesCountAggregateInputType | true
    }

  export interface enrolledCoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrolledCourses'], meta: { name: 'enrolledCourses' } }
    /**
     * Find zero or one EnrolledCourses that matches the filter.
     * @param {enrolledCoursesFindUniqueArgs} args - Arguments to find a EnrolledCourses
     * @example
     * // Get one EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrolledCoursesFindUniqueArgs>(args: SelectSubset<T, enrolledCoursesFindUniqueArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnrolledCourses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrolledCoursesFindUniqueOrThrowArgs} args - Arguments to find a EnrolledCourses
     * @example
     * // Get one EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrolledCoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, enrolledCoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrolledCoursesFindFirstArgs} args - Arguments to find a EnrolledCourses
     * @example
     * // Get one EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrolledCoursesFindFirstArgs>(args?: SelectSubset<T, enrolledCoursesFindFirstArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledCourses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrolledCoursesFindFirstOrThrowArgs} args - Arguments to find a EnrolledCourses
     * @example
     * // Get one EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrolledCoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, enrolledCoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnrolledCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrolledCoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.findMany()
     * 
     * // Get first 10 EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const enrolledCoursesWithUsernameOnly = await prisma.enrolledCourses.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends enrolledCoursesFindManyArgs>(args?: SelectSubset<T, enrolledCoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnrolledCourses.
     * @param {enrolledCoursesCreateArgs} args - Arguments to create a EnrolledCourses.
     * @example
     * // Create one EnrolledCourses
     * const EnrolledCourses = await prisma.enrolledCourses.create({
     *   data: {
     *     // ... data to create a EnrolledCourses
     *   }
     * })
     * 
     */
    create<T extends enrolledCoursesCreateArgs>(args: SelectSubset<T, enrolledCoursesCreateArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnrolledCourses.
     * @param {enrolledCoursesCreateManyArgs} args - Arguments to create many EnrolledCourses.
     * @example
     * // Create many EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrolledCoursesCreateManyArgs>(args?: SelectSubset<T, enrolledCoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnrolledCourses and returns the data saved in the database.
     * @param {enrolledCoursesCreateManyAndReturnArgs} args - Arguments to create many EnrolledCourses.
     * @example
     * // Create many EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnrolledCourses and only return the `username`
     * const enrolledCoursesWithUsernameOnly = await prisma.enrolledCourses.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enrolledCoursesCreateManyAndReturnArgs>(args?: SelectSubset<T, enrolledCoursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnrolledCourses.
     * @param {enrolledCoursesDeleteArgs} args - Arguments to delete one EnrolledCourses.
     * @example
     * // Delete one EnrolledCourses
     * const EnrolledCourses = await prisma.enrolledCourses.delete({
     *   where: {
     *     // ... filter to delete one EnrolledCourses
     *   }
     * })
     * 
     */
    delete<T extends enrolledCoursesDeleteArgs>(args: SelectSubset<T, enrolledCoursesDeleteArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnrolledCourses.
     * @param {enrolledCoursesUpdateArgs} args - Arguments to update one EnrolledCourses.
     * @example
     * // Update one EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrolledCoursesUpdateArgs>(args: SelectSubset<T, enrolledCoursesUpdateArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnrolledCourses.
     * @param {enrolledCoursesDeleteManyArgs} args - Arguments to filter EnrolledCourses to delete.
     * @example
     * // Delete a few EnrolledCourses
     * const { count } = await prisma.enrolledCourses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrolledCoursesDeleteManyArgs>(args?: SelectSubset<T, enrolledCoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrolledCoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrolledCoursesUpdateManyArgs>(args: SelectSubset<T, enrolledCoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledCourses and returns the data updated in the database.
     * @param {enrolledCoursesUpdateManyAndReturnArgs} args - Arguments to update many EnrolledCourses.
     * @example
     * // Update many EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnrolledCourses and only return the `username`
     * const enrolledCoursesWithUsernameOnly = await prisma.enrolledCourses.updateManyAndReturn({
     *   select: { username: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends enrolledCoursesUpdateManyAndReturnArgs>(args: SelectSubset<T, enrolledCoursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnrolledCourses.
     * @param {enrolledCoursesUpsertArgs} args - Arguments to update or create a EnrolledCourses.
     * @example
     * // Update or create a EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourses.upsert({
     *   create: {
     *     // ... data to create a EnrolledCourses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrolledCourses we want to update
     *   }
     * })
     */
    upsert<T extends enrolledCoursesUpsertArgs>(args: SelectSubset<T, enrolledCoursesUpsertArgs<ExtArgs>>): Prisma__enrolledCoursesClient<$Result.GetResult<Prisma.$enrolledCoursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnrolledCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrolledCoursesCountArgs} args - Arguments to filter EnrolledCourses to count.
     * @example
     * // Count the number of EnrolledCourses
     * const count = await prisma.enrolledCourses.count({
     *   where: {
     *     // ... the filter for the EnrolledCourses we want to count
     *   }
     * })
    **/
    count<T extends enrolledCoursesCountArgs>(
      args?: Subset<T, enrolledCoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolledCoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrolledCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrolledCoursesAggregateArgs>(args: Subset<T, EnrolledCoursesAggregateArgs>): Prisma.PrismaPromise<GetEnrolledCoursesAggregateType<T>>

    /**
     * Group by EnrolledCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrolledCoursesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enrolledCoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrolledCoursesGroupByArgs['orderBy'] }
        : { orderBy?: enrolledCoursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enrolledCoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolledCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrolledCourses model
   */
  readonly fields: enrolledCoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrolledCourses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrolledCoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends enrolledCourses$courseArgs<ExtArgs> = {}>(args?: Subset<T, enrolledCourses$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the enrolledCourses model
   */
  interface enrolledCoursesFieldRefs {
    readonly username: FieldRef<"enrolledCourses", 'String'>
    readonly CRN: FieldRef<"enrolledCourses", 'Int'>
    readonly Grade: FieldRef<"enrolledCourses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * enrolledCourses findUnique
   */
  export type enrolledCoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * Filter, which enrolledCourses to fetch.
     */
    where: enrolledCoursesWhereUniqueInput
  }

  /**
   * enrolledCourses findUniqueOrThrow
   */
  export type enrolledCoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * Filter, which enrolledCourses to fetch.
     */
    where: enrolledCoursesWhereUniqueInput
  }

  /**
   * enrolledCourses findFirst
   */
  export type enrolledCoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * Filter, which enrolledCourses to fetch.
     */
    where?: enrolledCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolledCourses to fetch.
     */
    orderBy?: enrolledCoursesOrderByWithRelationInput | enrolledCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrolledCourses.
     */
    cursor?: enrolledCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolledCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrolledCourses.
     */
    distinct?: EnrolledCoursesScalarFieldEnum | EnrolledCoursesScalarFieldEnum[]
  }

  /**
   * enrolledCourses findFirstOrThrow
   */
  export type enrolledCoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * Filter, which enrolledCourses to fetch.
     */
    where?: enrolledCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolledCourses to fetch.
     */
    orderBy?: enrolledCoursesOrderByWithRelationInput | enrolledCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrolledCourses.
     */
    cursor?: enrolledCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolledCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrolledCourses.
     */
    distinct?: EnrolledCoursesScalarFieldEnum | EnrolledCoursesScalarFieldEnum[]
  }

  /**
   * enrolledCourses findMany
   */
  export type enrolledCoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * Filter, which enrolledCourses to fetch.
     */
    where?: enrolledCoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolledCourses to fetch.
     */
    orderBy?: enrolledCoursesOrderByWithRelationInput | enrolledCoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrolledCourses.
     */
    cursor?: enrolledCoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolledCourses.
     */
    skip?: number
    distinct?: EnrolledCoursesScalarFieldEnum | EnrolledCoursesScalarFieldEnum[]
  }

  /**
   * enrolledCourses create
   */
  export type enrolledCoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a enrolledCourses.
     */
    data: XOR<enrolledCoursesCreateInput, enrolledCoursesUncheckedCreateInput>
  }

  /**
   * enrolledCourses createMany
   */
  export type enrolledCoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrolledCourses.
     */
    data: enrolledCoursesCreateManyInput | enrolledCoursesCreateManyInput[]
  }

  /**
   * enrolledCourses createManyAndReturn
   */
  export type enrolledCoursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * The data used to create many enrolledCourses.
     */
    data: enrolledCoursesCreateManyInput | enrolledCoursesCreateManyInput[]
  }

  /**
   * enrolledCourses update
   */
  export type enrolledCoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a enrolledCourses.
     */
    data: XOR<enrolledCoursesUpdateInput, enrolledCoursesUncheckedUpdateInput>
    /**
     * Choose, which enrolledCourses to update.
     */
    where: enrolledCoursesWhereUniqueInput
  }

  /**
   * enrolledCourses updateMany
   */
  export type enrolledCoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrolledCourses.
     */
    data: XOR<enrolledCoursesUpdateManyMutationInput, enrolledCoursesUncheckedUpdateManyInput>
    /**
     * Filter which enrolledCourses to update
     */
    where?: enrolledCoursesWhereInput
    /**
     * Limit how many enrolledCourses to update.
     */
    limit?: number
  }

  /**
   * enrolledCourses updateManyAndReturn
   */
  export type enrolledCoursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * The data used to update enrolledCourses.
     */
    data: XOR<enrolledCoursesUpdateManyMutationInput, enrolledCoursesUncheckedUpdateManyInput>
    /**
     * Filter which enrolledCourses to update
     */
    where?: enrolledCoursesWhereInput
    /**
     * Limit how many enrolledCourses to update.
     */
    limit?: number
  }

  /**
   * enrolledCourses upsert
   */
  export type enrolledCoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the enrolledCourses to update in case it exists.
     */
    where: enrolledCoursesWhereUniqueInput
    /**
     * In case the enrolledCourses found by the `where` argument doesn't exist, create a new enrolledCourses with this data.
     */
    create: XOR<enrolledCoursesCreateInput, enrolledCoursesUncheckedCreateInput>
    /**
     * In case the enrolledCourses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrolledCoursesUpdateInput, enrolledCoursesUncheckedUpdateInput>
  }

  /**
   * enrolledCourses delete
   */
  export type enrolledCoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
    /**
     * Filter which enrolledCourses to delete.
     */
    where: enrolledCoursesWhereUniqueInput
  }

  /**
   * enrolledCourses deleteMany
   */
  export type enrolledCoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrolledCourses to delete
     */
    where?: enrolledCoursesWhereInput
    /**
     * Limit how many enrolledCourses to delete.
     */
    limit?: number
  }

  /**
   * enrolledCourses.course
   */
  export type enrolledCourses$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    cursor?: coursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * enrolledCourses without action
   */
  export type enrolledCoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrolledCourses
     */
    select?: enrolledCoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrolledCourses
     */
    omit?: enrolledCoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrolledCoursesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsernamesScalarFieldEnum: {
    username: 'username',
    password: 'password',
    type: 'type'
  };

  export type UsernamesScalarFieldEnum = (typeof UsernamesScalarFieldEnum)[keyof typeof UsernamesScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    name: 'name',
    id: 'id',
    username: 'username',
    gender: 'gender',
    GPA: 'GPA'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    CName: 'CName',
    CNo: 'CNo',
    Category: 'Category',
    CH: 'CH',
    status: 'status',
    instructorsUsername: 'instructorsUsername',
    enrolledCoursesUsername: 'enrolledCoursesUsername',
    enrolledCoursesCRN: 'enrolledCoursesCRN'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    CName: 'CName',
    img: 'img',
    CNo: 'CNo',
    Category: 'Category',
    Section: 'Section',
    CH: 'CH',
    status: 'status',
    Campus: 'Campus',
    Seats: 'Seats',
    CRN: 'CRN'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const InstructorsScalarFieldEnum: {
    name: 'name',
    username: 'username',
    expertise: 'expertise'
  };

  export type InstructorsScalarFieldEnum = (typeof InstructorsScalarFieldEnum)[keyof typeof InstructorsScalarFieldEnum]


  export const EnrolledCoursesScalarFieldEnum: {
    username: 'username',
    CRN: 'CRN',
    Grade: 'Grade'
  };

  export type EnrolledCoursesScalarFieldEnum = (typeof EnrolledCoursesScalarFieldEnum)[keyof typeof EnrolledCoursesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'Campus'
   */
  export type EnumCampusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Campus'>
    
  /**
   * Deep Input Types
   */


  export type UsernamesWhereInput = {
    AND?: UsernamesWhereInput | UsernamesWhereInput[]
    OR?: UsernamesWhereInput[]
    NOT?: UsernamesWhereInput | UsernamesWhereInput[]
    username?: StringFilter<"Usernames"> | string
    password?: StringFilter<"Usernames"> | string
    type?: StringFilter<"Usernames"> | string
    students?: StudentsListRelationFilter
    instructors?: InstructorsListRelationFilter
  }

  export type UsernamesOrderByWithRelationInput = {
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    students?: studentsOrderByRelationAggregateInput
    instructors?: instructorsOrderByRelationAggregateInput
  }

  export type UsernamesWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    password?: string
    type?: string
    AND?: UsernamesWhereInput | UsernamesWhereInput[]
    OR?: UsernamesWhereInput[]
    NOT?: UsernamesWhereInput | UsernamesWhereInput[]
    students?: StudentsListRelationFilter
    instructors?: InstructorsListRelationFilter
  }, "username" | "password" | "type">

  export type UsernamesOrderByWithAggregationInput = {
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    _count?: UsernamesCountOrderByAggregateInput
    _max?: UsernamesMaxOrderByAggregateInput
    _min?: UsernamesMinOrderByAggregateInput
  }

  export type UsernamesScalarWhereWithAggregatesInput = {
    AND?: UsernamesScalarWhereWithAggregatesInput | UsernamesScalarWhereWithAggregatesInput[]
    OR?: UsernamesScalarWhereWithAggregatesInput[]
    NOT?: UsernamesScalarWhereWithAggregatesInput | UsernamesScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"Usernames"> | string
    password?: StringWithAggregatesFilter<"Usernames"> | string
    type?: StringWithAggregatesFilter<"Usernames"> | string
  }

  export type studentsWhereInput = {
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    name?: StringFilter<"students"> | string
    id?: StringFilter<"students"> | string
    username?: StringFilter<"students"> | string
    gender?: EnumGenderFilter<"students"> | $Enums.Gender
    GPA?: FloatFilter<"students"> | number
    user?: XOR<UsernamesScalarRelationFilter, UsernamesWhereInput>
  }

  export type studentsOrderByWithRelationInput = {
    name?: SortOrder
    id?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    GPA?: SortOrder
    user?: UsernamesOrderByWithRelationInput
  }

  export type studentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    name?: StringFilter<"students"> | string
    gender?: EnumGenderFilter<"students"> | $Enums.Gender
    GPA?: FloatFilter<"students"> | number
    user?: XOR<UsernamesScalarRelationFilter, UsernamesWhereInput>
  }, "id" | "username">

  export type studentsOrderByWithAggregationInput = {
    name?: SortOrder
    id?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    GPA?: SortOrder
    _count?: studentsCountOrderByAggregateInput
    _avg?: studentsAvgOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
    _sum?: studentsSumOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    OR?: studentsScalarWhereWithAggregatesInput[]
    NOT?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"students"> | string
    id?: StringWithAggregatesFilter<"students"> | string
    username?: StringWithAggregatesFilter<"students"> | string
    gender?: EnumGenderWithAggregatesFilter<"students"> | $Enums.Gender
    GPA?: FloatWithAggregatesFilter<"students"> | number
  }

  export type coursesWhereInput = {
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    CName?: StringFilter<"courses"> | string
    CNo?: StringFilter<"courses"> | string
    Category?: StringFilter<"courses"> | string
    CH?: IntFilter<"courses"> | number
    status?: EnumstatusFilter<"courses"> | $Enums.status
    instructorsUsername?: StringNullableFilter<"courses"> | string | null
    enrolledCoursesUsername?: StringNullableFilter<"courses"> | string | null
    enrolledCoursesCRN?: IntNullableFilter<"courses"> | number | null
    instructors?: XOR<InstructorsNullableScalarRelationFilter, instructorsWhereInput> | null
    enrolledCourses?: XOR<EnrolledCoursesNullableScalarRelationFilter, enrolledCoursesWhereInput> | null
  }

  export type coursesOrderByWithRelationInput = {
    CName?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    instructorsUsername?: SortOrderInput | SortOrder
    enrolledCoursesUsername?: SortOrderInput | SortOrder
    enrolledCoursesCRN?: SortOrderInput | SortOrder
    instructors?: instructorsOrderByWithRelationInput
    enrolledCourses?: enrolledCoursesOrderByWithRelationInput
  }

  export type coursesWhereUniqueInput = Prisma.AtLeast<{
    CNo?: string
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    CName?: StringFilter<"courses"> | string
    Category?: StringFilter<"courses"> | string
    CH?: IntFilter<"courses"> | number
    status?: EnumstatusFilter<"courses"> | $Enums.status
    instructorsUsername?: StringNullableFilter<"courses"> | string | null
    enrolledCoursesUsername?: StringNullableFilter<"courses"> | string | null
    enrolledCoursesCRN?: IntNullableFilter<"courses"> | number | null
    instructors?: XOR<InstructorsNullableScalarRelationFilter, instructorsWhereInput> | null
    enrolledCourses?: XOR<EnrolledCoursesNullableScalarRelationFilter, enrolledCoursesWhereInput> | null
  }, "CNo">

  export type coursesOrderByWithAggregationInput = {
    CName?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    instructorsUsername?: SortOrderInput | SortOrder
    enrolledCoursesUsername?: SortOrderInput | SortOrder
    enrolledCoursesCRN?: SortOrderInput | SortOrder
    _count?: coursesCountOrderByAggregateInput
    _avg?: coursesAvgOrderByAggregateInput
    _max?: coursesMaxOrderByAggregateInput
    _min?: coursesMinOrderByAggregateInput
    _sum?: coursesSumOrderByAggregateInput
  }

  export type coursesScalarWhereWithAggregatesInput = {
    AND?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    OR?: coursesScalarWhereWithAggregatesInput[]
    NOT?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    CName?: StringWithAggregatesFilter<"courses"> | string
    CNo?: StringWithAggregatesFilter<"courses"> | string
    Category?: StringWithAggregatesFilter<"courses"> | string
    CH?: IntWithAggregatesFilter<"courses"> | number
    status?: EnumstatusWithAggregatesFilter<"courses"> | $Enums.status
    instructorsUsername?: StringNullableWithAggregatesFilter<"courses"> | string | null
    enrolledCoursesUsername?: StringNullableWithAggregatesFilter<"courses"> | string | null
    enrolledCoursesCRN?: IntNullableWithAggregatesFilter<"courses"> | number | null
  }

  export type classesWhereInput = {
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    CName?: StringFilter<"classes"> | string
    img?: StringFilter<"classes"> | string
    CNo?: StringFilter<"classes"> | string
    Category?: StringFilter<"classes"> | string
    Section?: StringFilter<"classes"> | string
    CH?: IntFilter<"classes"> | number
    status?: EnumstatusFilter<"classes"> | $Enums.status
    Campus?: EnumCampusFilter<"classes"> | $Enums.Campus
    Seats?: StringFilter<"classes"> | string
    CRN?: IntFilter<"classes"> | number
  }

  export type classesOrderByWithRelationInput = {
    CName?: SortOrder
    img?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    Section?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    Campus?: SortOrder
    Seats?: SortOrder
    CRN?: SortOrder
  }

  export type classesWhereUniqueInput = Prisma.AtLeast<{
    CRN?: number
    Section_CNo?: classesSectionCNoCompoundUniqueInput
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    CName?: StringFilter<"classes"> | string
    img?: StringFilter<"classes"> | string
    CNo?: StringFilter<"classes"> | string
    Category?: StringFilter<"classes"> | string
    Section?: StringFilter<"classes"> | string
    CH?: IntFilter<"classes"> | number
    status?: EnumstatusFilter<"classes"> | $Enums.status
    Campus?: EnumCampusFilter<"classes"> | $Enums.Campus
    Seats?: StringFilter<"classes"> | string
  }, "CRN" | "Section_CNo">

  export type classesOrderByWithAggregationInput = {
    CName?: SortOrder
    img?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    Section?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    Campus?: SortOrder
    Seats?: SortOrder
    CRN?: SortOrder
    _count?: classesCountOrderByAggregateInput
    _avg?: classesAvgOrderByAggregateInput
    _max?: classesMaxOrderByAggregateInput
    _min?: classesMinOrderByAggregateInput
    _sum?: classesSumOrderByAggregateInput
  }

  export type classesScalarWhereWithAggregatesInput = {
    AND?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    OR?: classesScalarWhereWithAggregatesInput[]
    NOT?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    CName?: StringWithAggregatesFilter<"classes"> | string
    img?: StringWithAggregatesFilter<"classes"> | string
    CNo?: StringWithAggregatesFilter<"classes"> | string
    Category?: StringWithAggregatesFilter<"classes"> | string
    Section?: StringWithAggregatesFilter<"classes"> | string
    CH?: IntWithAggregatesFilter<"classes"> | number
    status?: EnumstatusWithAggregatesFilter<"classes"> | $Enums.status
    Campus?: EnumCampusWithAggregatesFilter<"classes"> | $Enums.Campus
    Seats?: StringWithAggregatesFilter<"classes"> | string
    CRN?: IntWithAggregatesFilter<"classes"> | number
  }

  export type instructorsWhereInput = {
    AND?: instructorsWhereInput | instructorsWhereInput[]
    OR?: instructorsWhereInput[]
    NOT?: instructorsWhereInput | instructorsWhereInput[]
    name?: StringFilter<"instructors"> | string
    username?: StringFilter<"instructors"> | string
    expertise?: StringFilter<"instructors"> | string
    user?: XOR<UsernamesScalarRelationFilter, UsernamesWhereInput>
    CRNs?: CoursesListRelationFilter
  }

  export type instructorsOrderByWithRelationInput = {
    name?: SortOrder
    username?: SortOrder
    expertise?: SortOrder
    user?: UsernamesOrderByWithRelationInput
    CRNs?: coursesOrderByRelationAggregateInput
  }

  export type instructorsWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    AND?: instructorsWhereInput | instructorsWhereInput[]
    OR?: instructorsWhereInput[]
    NOT?: instructorsWhereInput | instructorsWhereInput[]
    name?: StringFilter<"instructors"> | string
    expertise?: StringFilter<"instructors"> | string
    user?: XOR<UsernamesScalarRelationFilter, UsernamesWhereInput>
    CRNs?: CoursesListRelationFilter
  }, "username">

  export type instructorsOrderByWithAggregationInput = {
    name?: SortOrder
    username?: SortOrder
    expertise?: SortOrder
    _count?: instructorsCountOrderByAggregateInput
    _max?: instructorsMaxOrderByAggregateInput
    _min?: instructorsMinOrderByAggregateInput
  }

  export type instructorsScalarWhereWithAggregatesInput = {
    AND?: instructorsScalarWhereWithAggregatesInput | instructorsScalarWhereWithAggregatesInput[]
    OR?: instructorsScalarWhereWithAggregatesInput[]
    NOT?: instructorsScalarWhereWithAggregatesInput | instructorsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"instructors"> | string
    username?: StringWithAggregatesFilter<"instructors"> | string
    expertise?: StringWithAggregatesFilter<"instructors"> | string
  }

  export type enrolledCoursesWhereInput = {
    AND?: enrolledCoursesWhereInput | enrolledCoursesWhereInput[]
    OR?: enrolledCoursesWhereInput[]
    NOT?: enrolledCoursesWhereInput | enrolledCoursesWhereInput[]
    username?: StringFilter<"enrolledCourses"> | string
    CRN?: IntFilter<"enrolledCourses"> | number
    Grade?: StringFilter<"enrolledCourses"> | string
    course?: CoursesListRelationFilter
  }

  export type enrolledCoursesOrderByWithRelationInput = {
    username?: SortOrder
    CRN?: SortOrder
    Grade?: SortOrder
    course?: coursesOrderByRelationAggregateInput
  }

  export type enrolledCoursesWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    CRN?: number
    username_CRN?: enrolledCoursesUsernameCRNCompoundUniqueInput
    AND?: enrolledCoursesWhereInput | enrolledCoursesWhereInput[]
    OR?: enrolledCoursesWhereInput[]
    NOT?: enrolledCoursesWhereInput | enrolledCoursesWhereInput[]
    Grade?: StringFilter<"enrolledCourses"> | string
    course?: CoursesListRelationFilter
  }, "username_CRN" | "username" | "CRN">

  export type enrolledCoursesOrderByWithAggregationInput = {
    username?: SortOrder
    CRN?: SortOrder
    Grade?: SortOrder
    _count?: enrolledCoursesCountOrderByAggregateInput
    _avg?: enrolledCoursesAvgOrderByAggregateInput
    _max?: enrolledCoursesMaxOrderByAggregateInput
    _min?: enrolledCoursesMinOrderByAggregateInput
    _sum?: enrolledCoursesSumOrderByAggregateInput
  }

  export type enrolledCoursesScalarWhereWithAggregatesInput = {
    AND?: enrolledCoursesScalarWhereWithAggregatesInput | enrolledCoursesScalarWhereWithAggregatesInput[]
    OR?: enrolledCoursesScalarWhereWithAggregatesInput[]
    NOT?: enrolledCoursesScalarWhereWithAggregatesInput | enrolledCoursesScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"enrolledCourses"> | string
    CRN?: IntWithAggregatesFilter<"enrolledCourses"> | number
    Grade?: StringWithAggregatesFilter<"enrolledCourses"> | string
  }

  export type UsernamesCreateInput = {
    username: string
    password: string
    type: string
    students?: studentsCreateNestedManyWithoutUserInput
    instructors?: instructorsCreateNestedManyWithoutUserInput
  }

  export type UsernamesUncheckedCreateInput = {
    username: string
    password: string
    type: string
    students?: studentsUncheckedCreateNestedManyWithoutUserInput
    instructors?: instructorsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsernamesUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    students?: studentsUpdateManyWithoutUserNestedInput
    instructors?: instructorsUpdateManyWithoutUserNestedInput
  }

  export type UsernamesUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    students?: studentsUncheckedUpdateManyWithoutUserNestedInput
    instructors?: instructorsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsernamesCreateManyInput = {
    username: string
    password: string
    type: string
  }

  export type UsernamesUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UsernamesUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type studentsCreateInput = {
    name: string
    id: string
    gender: $Enums.Gender
    GPA: number
    user: UsernamesCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateInput = {
    name: string
    id: string
    username: string
    gender: $Enums.Gender
    GPA: number
  }

  export type studentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    GPA?: FloatFieldUpdateOperationsInput | number
    user?: UsernamesUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    GPA?: FloatFieldUpdateOperationsInput | number
  }

  export type studentsCreateManyInput = {
    name: string
    id: string
    username: string
    gender: $Enums.Gender
    GPA: number
  }

  export type studentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    GPA?: FloatFieldUpdateOperationsInput | number
  }

  export type studentsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    GPA?: FloatFieldUpdateOperationsInput | number
  }

  export type coursesCreateInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    instructors?: instructorsCreateNestedOneWithoutCRNsInput
    enrolledCourses?: enrolledCoursesCreateNestedOneWithoutCourseInput
  }

  export type coursesUncheckedCreateInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    instructorsUsername?: string | null
    enrolledCoursesUsername?: string | null
    enrolledCoursesCRN?: number | null
  }

  export type coursesUpdateInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    instructors?: instructorsUpdateOneWithoutCRNsNestedInput
    enrolledCourses?: enrolledCoursesUpdateOneWithoutCourseNestedInput
  }

  export type coursesUncheckedUpdateInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    instructorsUsername?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledCoursesUsername?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledCoursesCRN?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type coursesCreateManyInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    instructorsUsername?: string | null
    enrolledCoursesUsername?: string | null
    enrolledCoursesCRN?: number | null
  }

  export type coursesUpdateManyMutationInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type coursesUncheckedUpdateManyInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    instructorsUsername?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledCoursesUsername?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledCoursesCRN?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type classesCreateInput = {
    CName: string
    img: string
    CNo: string
    Category: string
    Section: string
    CH: number
    status: $Enums.status
    Campus: $Enums.Campus
    Seats: string
    CRN: number
  }

  export type classesUncheckedCreateInput = {
    CName: string
    img: string
    CNo: string
    Category: string
    Section: string
    CH: number
    status: $Enums.status
    Campus: $Enums.Campus
    Seats: string
    CRN: number
  }

  export type classesUpdateInput = {
    CName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Section?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    Campus?: EnumCampusFieldUpdateOperationsInput | $Enums.Campus
    Seats?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
  }

  export type classesUncheckedUpdateInput = {
    CName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Section?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    Campus?: EnumCampusFieldUpdateOperationsInput | $Enums.Campus
    Seats?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
  }

  export type classesCreateManyInput = {
    CName: string
    img: string
    CNo: string
    Category: string
    Section: string
    CH: number
    status: $Enums.status
    Campus: $Enums.Campus
    Seats: string
    CRN: number
  }

  export type classesUpdateManyMutationInput = {
    CName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Section?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    Campus?: EnumCampusFieldUpdateOperationsInput | $Enums.Campus
    Seats?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
  }

  export type classesUncheckedUpdateManyInput = {
    CName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Section?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    Campus?: EnumCampusFieldUpdateOperationsInput | $Enums.Campus
    Seats?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
  }

  export type instructorsCreateInput = {
    name: string
    expertise: string
    user: UsernamesCreateNestedOneWithoutInstructorsInput
    CRNs?: coursesCreateNestedManyWithoutInstructorsInput
  }

  export type instructorsUncheckedCreateInput = {
    name: string
    username: string
    expertise: string
    CRNs?: coursesUncheckedCreateNestedManyWithoutInstructorsInput
  }

  export type instructorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    user?: UsernamesUpdateOneRequiredWithoutInstructorsNestedInput
    CRNs?: coursesUpdateManyWithoutInstructorsNestedInput
  }

  export type instructorsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    CRNs?: coursesUncheckedUpdateManyWithoutInstructorsNestedInput
  }

  export type instructorsCreateManyInput = {
    name: string
    username: string
    expertise: string
  }

  export type instructorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type instructorsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type enrolledCoursesCreateInput = {
    username: string
    CRN: number
    Grade: string
    course?: coursesCreateNestedManyWithoutEnrolledCoursesInput
  }

  export type enrolledCoursesUncheckedCreateInput = {
    username: string
    CRN: number
    Grade: string
    course?: coursesUncheckedCreateNestedManyWithoutEnrolledCoursesInput
  }

  export type enrolledCoursesUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
    Grade?: StringFieldUpdateOperationsInput | string
    course?: coursesUpdateManyWithoutEnrolledCoursesNestedInput
  }

  export type enrolledCoursesUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
    Grade?: StringFieldUpdateOperationsInput | string
    course?: coursesUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
  }

  export type enrolledCoursesCreateManyInput = {
    username: string
    CRN: number
    Grade: string
  }

  export type enrolledCoursesUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
    Grade?: StringFieldUpdateOperationsInput | string
  }

  export type enrolledCoursesUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
    Grade?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StudentsListRelationFilter = {
    every?: studentsWhereInput
    some?: studentsWhereInput
    none?: studentsWhereInput
  }

  export type InstructorsListRelationFilter = {
    every?: instructorsWhereInput
    some?: instructorsWhereInput
    none?: instructorsWhereInput
  }

  export type studentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type instructorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsernamesCountOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UsernamesMaxOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UsernamesMinOrderByAggregateInput = {
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsernamesScalarRelationFilter = {
    is?: UsernamesWhereInput
    isNot?: UsernamesWhereInput
  }

  export type studentsCountOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    GPA?: SortOrder
  }

  export type studentsAvgOrderByAggregateInput = {
    GPA?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    GPA?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    GPA?: SortOrder
  }

  export type studentsSumOrderByAggregateInput = {
    GPA?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InstructorsNullableScalarRelationFilter = {
    is?: instructorsWhereInput | null
    isNot?: instructorsWhereInput | null
  }

  export type EnrolledCoursesNullableScalarRelationFilter = {
    is?: enrolledCoursesWhereInput | null
    isNot?: enrolledCoursesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type coursesCountOrderByAggregateInput = {
    CName?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    instructorsUsername?: SortOrder
    enrolledCoursesUsername?: SortOrder
    enrolledCoursesCRN?: SortOrder
  }

  export type coursesAvgOrderByAggregateInput = {
    CH?: SortOrder
    enrolledCoursesCRN?: SortOrder
  }

  export type coursesMaxOrderByAggregateInput = {
    CName?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    instructorsUsername?: SortOrder
    enrolledCoursesUsername?: SortOrder
    enrolledCoursesCRN?: SortOrder
  }

  export type coursesMinOrderByAggregateInput = {
    CName?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    instructorsUsername?: SortOrder
    enrolledCoursesUsername?: SortOrder
    enrolledCoursesCRN?: SortOrder
  }

  export type coursesSumOrderByAggregateInput = {
    CH?: SortOrder
    enrolledCoursesCRN?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCampusFilter<$PrismaModel = never> = {
    equals?: $Enums.Campus | EnumCampusFieldRefInput<$PrismaModel>
    in?: $Enums.Campus[]
    notIn?: $Enums.Campus[]
    not?: NestedEnumCampusFilter<$PrismaModel> | $Enums.Campus
  }

  export type classesSectionCNoCompoundUniqueInput = {
    Section: string
    CNo: string
  }

  export type classesCountOrderByAggregateInput = {
    CName?: SortOrder
    img?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    Section?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    Campus?: SortOrder
    Seats?: SortOrder
    CRN?: SortOrder
  }

  export type classesAvgOrderByAggregateInput = {
    CH?: SortOrder
    CRN?: SortOrder
  }

  export type classesMaxOrderByAggregateInput = {
    CName?: SortOrder
    img?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    Section?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    Campus?: SortOrder
    Seats?: SortOrder
    CRN?: SortOrder
  }

  export type classesMinOrderByAggregateInput = {
    CName?: SortOrder
    img?: SortOrder
    CNo?: SortOrder
    Category?: SortOrder
    Section?: SortOrder
    CH?: SortOrder
    status?: SortOrder
    Campus?: SortOrder
    Seats?: SortOrder
    CRN?: SortOrder
  }

  export type classesSumOrderByAggregateInput = {
    CH?: SortOrder
    CRN?: SortOrder
  }

  export type EnumCampusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Campus | EnumCampusFieldRefInput<$PrismaModel>
    in?: $Enums.Campus[]
    notIn?: $Enums.Campus[]
    not?: NestedEnumCampusWithAggregatesFilter<$PrismaModel> | $Enums.Campus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampusFilter<$PrismaModel>
    _max?: NestedEnumCampusFilter<$PrismaModel>
  }

  export type CoursesListRelationFilter = {
    every?: coursesWhereInput
    some?: coursesWhereInput
    none?: coursesWhereInput
  }

  export type coursesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type instructorsCountOrderByAggregateInput = {
    name?: SortOrder
    username?: SortOrder
    expertise?: SortOrder
  }

  export type instructorsMaxOrderByAggregateInput = {
    name?: SortOrder
    username?: SortOrder
    expertise?: SortOrder
  }

  export type instructorsMinOrderByAggregateInput = {
    name?: SortOrder
    username?: SortOrder
    expertise?: SortOrder
  }

  export type enrolledCoursesUsernameCRNCompoundUniqueInput = {
    username: string
    CRN: number
  }

  export type enrolledCoursesCountOrderByAggregateInput = {
    username?: SortOrder
    CRN?: SortOrder
    Grade?: SortOrder
  }

  export type enrolledCoursesAvgOrderByAggregateInput = {
    CRN?: SortOrder
  }

  export type enrolledCoursesMaxOrderByAggregateInput = {
    username?: SortOrder
    CRN?: SortOrder
    Grade?: SortOrder
  }

  export type enrolledCoursesMinOrderByAggregateInput = {
    username?: SortOrder
    CRN?: SortOrder
    Grade?: SortOrder
  }

  export type enrolledCoursesSumOrderByAggregateInput = {
    CRN?: SortOrder
  }

  export type studentsCreateNestedManyWithoutUserInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput> | studentsCreateWithoutUserInput[] | studentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput | studentsCreateOrConnectWithoutUserInput[]
    createMany?: studentsCreateManyUserInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type instructorsCreateNestedManyWithoutUserInput = {
    create?: XOR<instructorsCreateWithoutUserInput, instructorsUncheckedCreateWithoutUserInput> | instructorsCreateWithoutUserInput[] | instructorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: instructorsCreateOrConnectWithoutUserInput | instructorsCreateOrConnectWithoutUserInput[]
    createMany?: instructorsCreateManyUserInputEnvelope
    connect?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
  }

  export type studentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput> | studentsCreateWithoutUserInput[] | studentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput | studentsCreateOrConnectWithoutUserInput[]
    createMany?: studentsCreateManyUserInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type instructorsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<instructorsCreateWithoutUserInput, instructorsUncheckedCreateWithoutUserInput> | instructorsCreateWithoutUserInput[] | instructorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: instructorsCreateOrConnectWithoutUserInput | instructorsCreateOrConnectWithoutUserInput[]
    createMany?: instructorsCreateManyUserInputEnvelope
    connect?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type studentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput> | studentsCreateWithoutUserInput[] | studentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput | studentsCreateOrConnectWithoutUserInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutUserInput | studentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: studentsCreateManyUserInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutUserInput | studentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutUserInput | studentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type instructorsUpdateManyWithoutUserNestedInput = {
    create?: XOR<instructorsCreateWithoutUserInput, instructorsUncheckedCreateWithoutUserInput> | instructorsCreateWithoutUserInput[] | instructorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: instructorsCreateOrConnectWithoutUserInput | instructorsCreateOrConnectWithoutUserInput[]
    upsert?: instructorsUpsertWithWhereUniqueWithoutUserInput | instructorsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: instructorsCreateManyUserInputEnvelope
    set?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    disconnect?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    delete?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    connect?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    update?: instructorsUpdateWithWhereUniqueWithoutUserInput | instructorsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: instructorsUpdateManyWithWhereWithoutUserInput | instructorsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: instructorsScalarWhereInput | instructorsScalarWhereInput[]
  }

  export type studentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput> | studentsCreateWithoutUserInput[] | studentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutUserInput | studentsCreateOrConnectWithoutUserInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutUserInput | studentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: studentsCreateManyUserInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutUserInput | studentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutUserInput | studentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type instructorsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<instructorsCreateWithoutUserInput, instructorsUncheckedCreateWithoutUserInput> | instructorsCreateWithoutUserInput[] | instructorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: instructorsCreateOrConnectWithoutUserInput | instructorsCreateOrConnectWithoutUserInput[]
    upsert?: instructorsUpsertWithWhereUniqueWithoutUserInput | instructorsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: instructorsCreateManyUserInputEnvelope
    set?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    disconnect?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    delete?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    connect?: instructorsWhereUniqueInput | instructorsWhereUniqueInput[]
    update?: instructorsUpdateWithWhereUniqueWithoutUserInput | instructorsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: instructorsUpdateManyWithWhereWithoutUserInput | instructorsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: instructorsScalarWhereInput | instructorsScalarWhereInput[]
  }

  export type UsernamesCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UsernamesCreateWithoutStudentsInput, UsernamesUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UsernamesCreateOrConnectWithoutStudentsInput
    connect?: UsernamesWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsernamesUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<UsernamesCreateWithoutStudentsInput, UsernamesUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UsernamesCreateOrConnectWithoutStudentsInput
    upsert?: UsernamesUpsertWithoutStudentsInput
    connect?: UsernamesWhereUniqueInput
    update?: XOR<XOR<UsernamesUpdateToOneWithWhereWithoutStudentsInput, UsernamesUpdateWithoutStudentsInput>, UsernamesUncheckedUpdateWithoutStudentsInput>
  }

  export type instructorsCreateNestedOneWithoutCRNsInput = {
    create?: XOR<instructorsCreateWithoutCRNsInput, instructorsUncheckedCreateWithoutCRNsInput>
    connectOrCreate?: instructorsCreateOrConnectWithoutCRNsInput
    connect?: instructorsWhereUniqueInput
  }

  export type enrolledCoursesCreateNestedOneWithoutCourseInput = {
    create?: XOR<enrolledCoursesCreateWithoutCourseInput, enrolledCoursesUncheckedCreateWithoutCourseInput>
    connectOrCreate?: enrolledCoursesCreateOrConnectWithoutCourseInput
    connect?: enrolledCoursesWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type instructorsUpdateOneWithoutCRNsNestedInput = {
    create?: XOR<instructorsCreateWithoutCRNsInput, instructorsUncheckedCreateWithoutCRNsInput>
    connectOrCreate?: instructorsCreateOrConnectWithoutCRNsInput
    upsert?: instructorsUpsertWithoutCRNsInput
    disconnect?: instructorsWhereInput | boolean
    delete?: instructorsWhereInput | boolean
    connect?: instructorsWhereUniqueInput
    update?: XOR<XOR<instructorsUpdateToOneWithWhereWithoutCRNsInput, instructorsUpdateWithoutCRNsInput>, instructorsUncheckedUpdateWithoutCRNsInput>
  }

  export type enrolledCoursesUpdateOneWithoutCourseNestedInput = {
    create?: XOR<enrolledCoursesCreateWithoutCourseInput, enrolledCoursesUncheckedCreateWithoutCourseInput>
    connectOrCreate?: enrolledCoursesCreateOrConnectWithoutCourseInput
    upsert?: enrolledCoursesUpsertWithoutCourseInput
    disconnect?: enrolledCoursesWhereInput | boolean
    delete?: enrolledCoursesWhereInput | boolean
    connect?: enrolledCoursesWhereUniqueInput
    update?: XOR<XOR<enrolledCoursesUpdateToOneWithWhereWithoutCourseInput, enrolledCoursesUpdateWithoutCourseInput>, enrolledCoursesUncheckedUpdateWithoutCourseInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCampusFieldUpdateOperationsInput = {
    set?: $Enums.Campus
  }

  export type UsernamesCreateNestedOneWithoutInstructorsInput = {
    create?: XOR<UsernamesCreateWithoutInstructorsInput, UsernamesUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: UsernamesCreateOrConnectWithoutInstructorsInput
    connect?: UsernamesWhereUniqueInput
  }

  export type coursesCreateNestedManyWithoutInstructorsInput = {
    create?: XOR<coursesCreateWithoutInstructorsInput, coursesUncheckedCreateWithoutInstructorsInput> | coursesCreateWithoutInstructorsInput[] | coursesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutInstructorsInput | coursesCreateOrConnectWithoutInstructorsInput[]
    createMany?: coursesCreateManyInstructorsInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type coursesUncheckedCreateNestedManyWithoutInstructorsInput = {
    create?: XOR<coursesCreateWithoutInstructorsInput, coursesUncheckedCreateWithoutInstructorsInput> | coursesCreateWithoutInstructorsInput[] | coursesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutInstructorsInput | coursesCreateOrConnectWithoutInstructorsInput[]
    createMany?: coursesCreateManyInstructorsInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type UsernamesUpdateOneRequiredWithoutInstructorsNestedInput = {
    create?: XOR<UsernamesCreateWithoutInstructorsInput, UsernamesUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: UsernamesCreateOrConnectWithoutInstructorsInput
    upsert?: UsernamesUpsertWithoutInstructorsInput
    connect?: UsernamesWhereUniqueInput
    update?: XOR<XOR<UsernamesUpdateToOneWithWhereWithoutInstructorsInput, UsernamesUpdateWithoutInstructorsInput>, UsernamesUncheckedUpdateWithoutInstructorsInput>
  }

  export type coursesUpdateManyWithoutInstructorsNestedInput = {
    create?: XOR<coursesCreateWithoutInstructorsInput, coursesUncheckedCreateWithoutInstructorsInput> | coursesCreateWithoutInstructorsInput[] | coursesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutInstructorsInput | coursesCreateOrConnectWithoutInstructorsInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutInstructorsInput | coursesUpsertWithWhereUniqueWithoutInstructorsInput[]
    createMany?: coursesCreateManyInstructorsInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutInstructorsInput | coursesUpdateWithWhereUniqueWithoutInstructorsInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutInstructorsInput | coursesUpdateManyWithWhereWithoutInstructorsInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type coursesUncheckedUpdateManyWithoutInstructorsNestedInput = {
    create?: XOR<coursesCreateWithoutInstructorsInput, coursesUncheckedCreateWithoutInstructorsInput> | coursesCreateWithoutInstructorsInput[] | coursesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutInstructorsInput | coursesCreateOrConnectWithoutInstructorsInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutInstructorsInput | coursesUpsertWithWhereUniqueWithoutInstructorsInput[]
    createMany?: coursesCreateManyInstructorsInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutInstructorsInput | coursesUpdateWithWhereUniqueWithoutInstructorsInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutInstructorsInput | coursesUpdateManyWithWhereWithoutInstructorsInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type coursesCreateNestedManyWithoutEnrolledCoursesInput = {
    create?: XOR<coursesCreateWithoutEnrolledCoursesInput, coursesUncheckedCreateWithoutEnrolledCoursesInput> | coursesCreateWithoutEnrolledCoursesInput[] | coursesUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutEnrolledCoursesInput | coursesCreateOrConnectWithoutEnrolledCoursesInput[]
    createMany?: coursesCreateManyEnrolledCoursesInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type coursesUncheckedCreateNestedManyWithoutEnrolledCoursesInput = {
    create?: XOR<coursesCreateWithoutEnrolledCoursesInput, coursesUncheckedCreateWithoutEnrolledCoursesInput> | coursesCreateWithoutEnrolledCoursesInput[] | coursesUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutEnrolledCoursesInput | coursesCreateOrConnectWithoutEnrolledCoursesInput[]
    createMany?: coursesCreateManyEnrolledCoursesInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type coursesUpdateManyWithoutEnrolledCoursesNestedInput = {
    create?: XOR<coursesCreateWithoutEnrolledCoursesInput, coursesUncheckedCreateWithoutEnrolledCoursesInput> | coursesCreateWithoutEnrolledCoursesInput[] | coursesUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutEnrolledCoursesInput | coursesCreateOrConnectWithoutEnrolledCoursesInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutEnrolledCoursesInput | coursesUpsertWithWhereUniqueWithoutEnrolledCoursesInput[]
    createMany?: coursesCreateManyEnrolledCoursesInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutEnrolledCoursesInput | coursesUpdateWithWhereUniqueWithoutEnrolledCoursesInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutEnrolledCoursesInput | coursesUpdateManyWithWhereWithoutEnrolledCoursesInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type coursesUncheckedUpdateManyWithoutEnrolledCoursesNestedInput = {
    create?: XOR<coursesCreateWithoutEnrolledCoursesInput, coursesUncheckedCreateWithoutEnrolledCoursesInput> | coursesCreateWithoutEnrolledCoursesInput[] | coursesUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutEnrolledCoursesInput | coursesCreateOrConnectWithoutEnrolledCoursesInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutEnrolledCoursesInput | coursesUpsertWithWhereUniqueWithoutEnrolledCoursesInput[]
    createMany?: coursesCreateManyEnrolledCoursesInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutEnrolledCoursesInput | coursesUpdateWithWhereUniqueWithoutEnrolledCoursesInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutEnrolledCoursesInput | coursesUpdateManyWithWhereWithoutEnrolledCoursesInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCampusFilter<$PrismaModel = never> = {
    equals?: $Enums.Campus | EnumCampusFieldRefInput<$PrismaModel>
    in?: $Enums.Campus[]
    notIn?: $Enums.Campus[]
    not?: NestedEnumCampusFilter<$PrismaModel> | $Enums.Campus
  }

  export type NestedEnumCampusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Campus | EnumCampusFieldRefInput<$PrismaModel>
    in?: $Enums.Campus[]
    notIn?: $Enums.Campus[]
    not?: NestedEnumCampusWithAggregatesFilter<$PrismaModel> | $Enums.Campus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampusFilter<$PrismaModel>
    _max?: NestedEnumCampusFilter<$PrismaModel>
  }

  export type studentsCreateWithoutUserInput = {
    name: string
    id: string
    gender: $Enums.Gender
    GPA: number
  }

  export type studentsUncheckedCreateWithoutUserInput = {
    name: string
    id: string
    gender: $Enums.Gender
    GPA: number
  }

  export type studentsCreateOrConnectWithoutUserInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
  }

  export type studentsCreateManyUserInputEnvelope = {
    data: studentsCreateManyUserInput | studentsCreateManyUserInput[]
  }

  export type instructorsCreateWithoutUserInput = {
    name: string
    expertise: string
    CRNs?: coursesCreateNestedManyWithoutInstructorsInput
  }

  export type instructorsUncheckedCreateWithoutUserInput = {
    name: string
    expertise: string
    CRNs?: coursesUncheckedCreateNestedManyWithoutInstructorsInput
  }

  export type instructorsCreateOrConnectWithoutUserInput = {
    where: instructorsWhereUniqueInput
    create: XOR<instructorsCreateWithoutUserInput, instructorsUncheckedCreateWithoutUserInput>
  }

  export type instructorsCreateManyUserInputEnvelope = {
    data: instructorsCreateManyUserInput | instructorsCreateManyUserInput[]
  }

  export type studentsUpsertWithWhereUniqueWithoutUserInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutUserInput, studentsUncheckedUpdateWithoutUserInput>
    create: XOR<studentsCreateWithoutUserInput, studentsUncheckedCreateWithoutUserInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutUserInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutUserInput, studentsUncheckedUpdateWithoutUserInput>
  }

  export type studentsUpdateManyWithWhereWithoutUserInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutUserInput>
  }

  export type studentsScalarWhereInput = {
    AND?: studentsScalarWhereInput | studentsScalarWhereInput[]
    OR?: studentsScalarWhereInput[]
    NOT?: studentsScalarWhereInput | studentsScalarWhereInput[]
    name?: StringFilter<"students"> | string
    id?: StringFilter<"students"> | string
    username?: StringFilter<"students"> | string
    gender?: EnumGenderFilter<"students"> | $Enums.Gender
    GPA?: FloatFilter<"students"> | number
  }

  export type instructorsUpsertWithWhereUniqueWithoutUserInput = {
    where: instructorsWhereUniqueInput
    update: XOR<instructorsUpdateWithoutUserInput, instructorsUncheckedUpdateWithoutUserInput>
    create: XOR<instructorsCreateWithoutUserInput, instructorsUncheckedCreateWithoutUserInput>
  }

  export type instructorsUpdateWithWhereUniqueWithoutUserInput = {
    where: instructorsWhereUniqueInput
    data: XOR<instructorsUpdateWithoutUserInput, instructorsUncheckedUpdateWithoutUserInput>
  }

  export type instructorsUpdateManyWithWhereWithoutUserInput = {
    where: instructorsScalarWhereInput
    data: XOR<instructorsUpdateManyMutationInput, instructorsUncheckedUpdateManyWithoutUserInput>
  }

  export type instructorsScalarWhereInput = {
    AND?: instructorsScalarWhereInput | instructorsScalarWhereInput[]
    OR?: instructorsScalarWhereInput[]
    NOT?: instructorsScalarWhereInput | instructorsScalarWhereInput[]
    name?: StringFilter<"instructors"> | string
    username?: StringFilter<"instructors"> | string
    expertise?: StringFilter<"instructors"> | string
  }

  export type UsernamesCreateWithoutStudentsInput = {
    username: string
    password: string
    type: string
    instructors?: instructorsCreateNestedManyWithoutUserInput
  }

  export type UsernamesUncheckedCreateWithoutStudentsInput = {
    username: string
    password: string
    type: string
    instructors?: instructorsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsernamesCreateOrConnectWithoutStudentsInput = {
    where: UsernamesWhereUniqueInput
    create: XOR<UsernamesCreateWithoutStudentsInput, UsernamesUncheckedCreateWithoutStudentsInput>
  }

  export type UsernamesUpsertWithoutStudentsInput = {
    update: XOR<UsernamesUpdateWithoutStudentsInput, UsernamesUncheckedUpdateWithoutStudentsInput>
    create: XOR<UsernamesCreateWithoutStudentsInput, UsernamesUncheckedCreateWithoutStudentsInput>
    where?: UsernamesWhereInput
  }

  export type UsernamesUpdateToOneWithWhereWithoutStudentsInput = {
    where?: UsernamesWhereInput
    data: XOR<UsernamesUpdateWithoutStudentsInput, UsernamesUncheckedUpdateWithoutStudentsInput>
  }

  export type UsernamesUpdateWithoutStudentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    instructors?: instructorsUpdateManyWithoutUserNestedInput
  }

  export type UsernamesUncheckedUpdateWithoutStudentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    instructors?: instructorsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type instructorsCreateWithoutCRNsInput = {
    name: string
    expertise: string
    user: UsernamesCreateNestedOneWithoutInstructorsInput
  }

  export type instructorsUncheckedCreateWithoutCRNsInput = {
    name: string
    username: string
    expertise: string
  }

  export type instructorsCreateOrConnectWithoutCRNsInput = {
    where: instructorsWhereUniqueInput
    create: XOR<instructorsCreateWithoutCRNsInput, instructorsUncheckedCreateWithoutCRNsInput>
  }

  export type enrolledCoursesCreateWithoutCourseInput = {
    username: string
    CRN: number
    Grade: string
  }

  export type enrolledCoursesUncheckedCreateWithoutCourseInput = {
    username: string
    CRN: number
    Grade: string
  }

  export type enrolledCoursesCreateOrConnectWithoutCourseInput = {
    where: enrolledCoursesWhereUniqueInput
    create: XOR<enrolledCoursesCreateWithoutCourseInput, enrolledCoursesUncheckedCreateWithoutCourseInput>
  }

  export type instructorsUpsertWithoutCRNsInput = {
    update: XOR<instructorsUpdateWithoutCRNsInput, instructorsUncheckedUpdateWithoutCRNsInput>
    create: XOR<instructorsCreateWithoutCRNsInput, instructorsUncheckedCreateWithoutCRNsInput>
    where?: instructorsWhereInput
  }

  export type instructorsUpdateToOneWithWhereWithoutCRNsInput = {
    where?: instructorsWhereInput
    data: XOR<instructorsUpdateWithoutCRNsInput, instructorsUncheckedUpdateWithoutCRNsInput>
  }

  export type instructorsUpdateWithoutCRNsInput = {
    name?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    user?: UsernamesUpdateOneRequiredWithoutInstructorsNestedInput
  }

  export type instructorsUncheckedUpdateWithoutCRNsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type enrolledCoursesUpsertWithoutCourseInput = {
    update: XOR<enrolledCoursesUpdateWithoutCourseInput, enrolledCoursesUncheckedUpdateWithoutCourseInput>
    create: XOR<enrolledCoursesCreateWithoutCourseInput, enrolledCoursesUncheckedCreateWithoutCourseInput>
    where?: enrolledCoursesWhereInput
  }

  export type enrolledCoursesUpdateToOneWithWhereWithoutCourseInput = {
    where?: enrolledCoursesWhereInput
    data: XOR<enrolledCoursesUpdateWithoutCourseInput, enrolledCoursesUncheckedUpdateWithoutCourseInput>
  }

  export type enrolledCoursesUpdateWithoutCourseInput = {
    username?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
    Grade?: StringFieldUpdateOperationsInput | string
  }

  export type enrolledCoursesUncheckedUpdateWithoutCourseInput = {
    username?: StringFieldUpdateOperationsInput | string
    CRN?: IntFieldUpdateOperationsInput | number
    Grade?: StringFieldUpdateOperationsInput | string
  }

  export type UsernamesCreateWithoutInstructorsInput = {
    username: string
    password: string
    type: string
    students?: studentsCreateNestedManyWithoutUserInput
  }

  export type UsernamesUncheckedCreateWithoutInstructorsInput = {
    username: string
    password: string
    type: string
    students?: studentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsernamesCreateOrConnectWithoutInstructorsInput = {
    where: UsernamesWhereUniqueInput
    create: XOR<UsernamesCreateWithoutInstructorsInput, UsernamesUncheckedCreateWithoutInstructorsInput>
  }

  export type coursesCreateWithoutInstructorsInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    enrolledCourses?: enrolledCoursesCreateNestedOneWithoutCourseInput
  }

  export type coursesUncheckedCreateWithoutInstructorsInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    enrolledCoursesUsername?: string | null
    enrolledCoursesCRN?: number | null
  }

  export type coursesCreateOrConnectWithoutInstructorsInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutInstructorsInput, coursesUncheckedCreateWithoutInstructorsInput>
  }

  export type coursesCreateManyInstructorsInputEnvelope = {
    data: coursesCreateManyInstructorsInput | coursesCreateManyInstructorsInput[]
  }

  export type UsernamesUpsertWithoutInstructorsInput = {
    update: XOR<UsernamesUpdateWithoutInstructorsInput, UsernamesUncheckedUpdateWithoutInstructorsInput>
    create: XOR<UsernamesCreateWithoutInstructorsInput, UsernamesUncheckedCreateWithoutInstructorsInput>
    where?: UsernamesWhereInput
  }

  export type UsernamesUpdateToOneWithWhereWithoutInstructorsInput = {
    where?: UsernamesWhereInput
    data: XOR<UsernamesUpdateWithoutInstructorsInput, UsernamesUncheckedUpdateWithoutInstructorsInput>
  }

  export type UsernamesUpdateWithoutInstructorsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    students?: studentsUpdateManyWithoutUserNestedInput
  }

  export type UsernamesUncheckedUpdateWithoutInstructorsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    students?: studentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type coursesUpsertWithWhereUniqueWithoutInstructorsInput = {
    where: coursesWhereUniqueInput
    update: XOR<coursesUpdateWithoutInstructorsInput, coursesUncheckedUpdateWithoutInstructorsInput>
    create: XOR<coursesCreateWithoutInstructorsInput, coursesUncheckedCreateWithoutInstructorsInput>
  }

  export type coursesUpdateWithWhereUniqueWithoutInstructorsInput = {
    where: coursesWhereUniqueInput
    data: XOR<coursesUpdateWithoutInstructorsInput, coursesUncheckedUpdateWithoutInstructorsInput>
  }

  export type coursesUpdateManyWithWhereWithoutInstructorsInput = {
    where: coursesScalarWhereInput
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyWithoutInstructorsInput>
  }

  export type coursesScalarWhereInput = {
    AND?: coursesScalarWhereInput | coursesScalarWhereInput[]
    OR?: coursesScalarWhereInput[]
    NOT?: coursesScalarWhereInput | coursesScalarWhereInput[]
    CName?: StringFilter<"courses"> | string
    CNo?: StringFilter<"courses"> | string
    Category?: StringFilter<"courses"> | string
    CH?: IntFilter<"courses"> | number
    status?: EnumstatusFilter<"courses"> | $Enums.status
    instructorsUsername?: StringNullableFilter<"courses"> | string | null
    enrolledCoursesUsername?: StringNullableFilter<"courses"> | string | null
    enrolledCoursesCRN?: IntNullableFilter<"courses"> | number | null
  }

  export type coursesCreateWithoutEnrolledCoursesInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    instructors?: instructorsCreateNestedOneWithoutCRNsInput
  }

  export type coursesUncheckedCreateWithoutEnrolledCoursesInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    instructorsUsername?: string | null
  }

  export type coursesCreateOrConnectWithoutEnrolledCoursesInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutEnrolledCoursesInput, coursesUncheckedCreateWithoutEnrolledCoursesInput>
  }

  export type coursesCreateManyEnrolledCoursesInputEnvelope = {
    data: coursesCreateManyEnrolledCoursesInput | coursesCreateManyEnrolledCoursesInput[]
  }

  export type coursesUpsertWithWhereUniqueWithoutEnrolledCoursesInput = {
    where: coursesWhereUniqueInput
    update: XOR<coursesUpdateWithoutEnrolledCoursesInput, coursesUncheckedUpdateWithoutEnrolledCoursesInput>
    create: XOR<coursesCreateWithoutEnrolledCoursesInput, coursesUncheckedCreateWithoutEnrolledCoursesInput>
  }

  export type coursesUpdateWithWhereUniqueWithoutEnrolledCoursesInput = {
    where: coursesWhereUniqueInput
    data: XOR<coursesUpdateWithoutEnrolledCoursesInput, coursesUncheckedUpdateWithoutEnrolledCoursesInput>
  }

  export type coursesUpdateManyWithWhereWithoutEnrolledCoursesInput = {
    where: coursesScalarWhereInput
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyWithoutEnrolledCoursesInput>
  }

  export type studentsCreateManyUserInput = {
    name: string
    id: string
    gender: $Enums.Gender
    GPA: number
  }

  export type instructorsCreateManyUserInput = {
    name: string
    expertise: string
  }

  export type studentsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    GPA?: FloatFieldUpdateOperationsInput | number
  }

  export type studentsUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    GPA?: FloatFieldUpdateOperationsInput | number
  }

  export type studentsUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    GPA?: FloatFieldUpdateOperationsInput | number
  }

  export type instructorsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    CRNs?: coursesUpdateManyWithoutInstructorsNestedInput
  }

  export type instructorsUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    CRNs?: coursesUncheckedUpdateManyWithoutInstructorsNestedInput
  }

  export type instructorsUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type coursesCreateManyInstructorsInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    enrolledCoursesUsername?: string | null
    enrolledCoursesCRN?: number | null
  }

  export type coursesUpdateWithoutInstructorsInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    enrolledCourses?: enrolledCoursesUpdateOneWithoutCourseNestedInput
  }

  export type coursesUncheckedUpdateWithoutInstructorsInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    enrolledCoursesUsername?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledCoursesCRN?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type coursesUncheckedUpdateManyWithoutInstructorsInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    enrolledCoursesUsername?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledCoursesCRN?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type coursesCreateManyEnrolledCoursesInput = {
    CName: string
    CNo: string
    Category: string
    CH: number
    status: $Enums.status
    instructorsUsername?: string | null
  }

  export type coursesUpdateWithoutEnrolledCoursesInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    instructors?: instructorsUpdateOneWithoutCRNsNestedInput
  }

  export type coursesUncheckedUpdateWithoutEnrolledCoursesInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    instructorsUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type coursesUncheckedUpdateManyWithoutEnrolledCoursesInput = {
    CName?: StringFieldUpdateOperationsInput | string
    CNo?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    CH?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    instructorsUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}