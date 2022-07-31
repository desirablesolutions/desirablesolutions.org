export const DBConfig = {
    name: 'DesirableSolutionsDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'projects',
            storeConfig: { keyPath: 'id', 
                          autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: false } }
            ]
        },
        {
            store: 'team',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: false } }
            ]
        },
        {
            store: 'blog',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: false } }
            ]
        }
    ]
};