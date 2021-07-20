const LOCAL_STORAGE_KEY = 'modules';

/**
 * Get any existing modules that exist in local storage
 *
 * @returns Object keyed by module name whose values are the module JSON
 */
export function getLocalStorageModules() {
  const existingModules = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!existingModules) return {};

  return JSON.parse(existingModules);
}

/**
 * Save a module to local storage
 *
 * @param {Object} module the JSON content of the module being saved
 */
export function saveLocalStorageModule(module) {
  const newModuleObject = { ...getLocalStorageModules() };

  newModuleObject[module.name] = module;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newModuleObject));
}

/**
 * Delete a specific module from the object in localStorage
 *
 * @param {string} moduleName name of the module to remove
 */
export function removeLocalStorageModule(moduleName) {
  const existingModules = getLocalStorageModules();

  if (existingModules[moduleName]) {
    const newModules = { ...existingModules };
    delete newModules[moduleName];

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newModules));
  }
}
