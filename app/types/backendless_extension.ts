/* eslint-disable no-unused-vars */
import 'backendless'

declare global {
  /**
   * @global
   * @namespace Backendless
   */
  namespace Backendless {

    /**
     * @public
     * @namespace Backendless.Users
     **/
    class Users {
      static login(login: string, password?: string, stayLoggedIn?: boolean): Promise<any>
      static describeUserClass(): Promise<any>
    }

    /**
     * @public
     * @namespace Backendless.Messaging
     **/
    namespace Messaging {
      /**
       * @public
       * @namespace Backendless.Messaging.EmailEnvelope
       * @constructor
       **/
      class EmailEnvelope extends Backendless.EmailEnvelope {}
    }

    /**
     * @public
     * @namespace Backendless.ServerCode
     **/
    namespace ServerCode {

      /**
       * @public
       * @type: Function
       **/
      function addService(service: any, file?: any, options?: any): void;

      /**
       * @public
       * @type: Function
       **/
      function getService(serviceClassName: string): any;

      /**
       * @public
       * @type: Function
       **/
      function customEvent(eventName: string, handler: any, isAsync?: boolean): void;


      /**
       * @public
       * @type: Function
       **/
      function addTimer(timer: any): void;

      /**
       * @public
       * @type: Function
       **/
      function addType(type: any): void;

      /**
       * @public
       * @namespace Backendless.ServerCode.PersistenceItem
       **/
      class PersistenceItem {
        ownerId: string
        objectId: string
        created: number
        updated: number
        dataStore: Backendless.DataStore
        static dataStore: Backendless.DataStore

        constructor(...args: any[]);
        /**
         * @public
         * @type: Function
         **/
        fetch(relations?: string[] | null, properties?: string[]): void;
        /**
         * @public
         * @type: Function
         **/
        saveWithRelations(options?: { stale: string[];}): Promise<PersistenceItem>;

        /**
         * @public
         * @type: Function
         **/
        static saveWithRelations(obj: PersistenceItem, opts?: any): Promise<PersistenceItem>

        /**
         * @public
         * @type: Function
         **/
        save(): Promise<PersistenceItem>;
        /**
         * @public
         * @type: Function
         **/
        static save(item: PersistenceItem): Promise<PersistenceItem>;
        /**
         * @public
         * @type: Function
         **/
        remove(): Promise<any>;
        /**
         * @public
         * @type: Function
         **/
        static remove(item: PersistenceItem | string): Promise<any>;

        /**
         * @public
         * @type: Function
         **/
        deleteRelation(
          columnName: string,
          childrenOrWhereClause: PersistenceItem | PersistenceItem[] | string
        ): Promise<any>

        /**
         * @public
         * @type: Function
         **/
        setRelation(
          columnName: string,
          childrenOrWhereClause: PersistenceItem | PersistenceItem[] | string
        ): Promise<any>

        /**
         * @public
         * @type: Function
         **/
        addRelation(
          columnName: string,
          childrenOrWhereClause: PersistenceItem | PersistenceItem[] | string
        ): Promise<any>

        /**
         * @public
         * @type: Function
         **/
        static bulkDelete(whereClause: string | Array<any | string>): Promise<any>
        /**
         * @public
         * @type: Function
         **/
        static bulkUpdate(whereClause: string, changes: any): Promise<any>
        /**
         * @public
         * @type: Function
         **/
        static bulkCreate(items: Array<any>): Promise<any>
        /**
         * @public
         * @type: Function
         **/
        static find(query: Backendless.DataQueryI | any | string): Promise<PersistenceItem[]>
        /**
         * @public
         * @type: Function
         **/
        static count(condition: string): Promise<any>
      }

      /**
       * @public
       * @namespace Backendless.ServerCode.User
       **/
      class User {
        static beforeLogin(handler: any): void;
        static afterLogin(handler: any): void;
        static beforeRegister(handler: any): void;
      }
    }

    namespace Request {
      /**
       * @public
       * @type: Function
       **/
      function get(url: string): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function post(url: string): typeof Request;


      /**
       * @public
       * @type: Function
       **/
      function put(url: string): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function del(url: string): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function set(header: string | Record<string, string>, value?: string): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function setEncoding(encoding: string| null): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function setHeaders(headers: any): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function setQueryParameters(queryParameters: any): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function setBody(body: any): typeof Request;

      /**
       * @public
       * @type: Function
       **/
      function send(body?: any): Promise<any>;

      /**
       * @public
       * @type: Function
       **/
      function profileEnd(id: any): any;


      /**
       * @public
       * @type: Function
       **/
      function profile(id:any, props: any): any;

      /**
       * @public
       * @type: Function
        **/
      function type(contentType: string): any;
    }

    /**
     * @public
     * @namespace Backendless.Cache
     **/
    namespace Cache {
      /**
       * @public
       * @type: Function
        **/
      function get<T>(key: string): Promise<T>;
    }
  }
}

export {}