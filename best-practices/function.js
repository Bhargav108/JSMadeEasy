// NOTE: Don't execute this file as most variables are assumed for explanation.

/*
  Default arguments are often cleaner than short circuiting. Be aware that if you use them, your function will 
  only provide default values for undefined arguments. Other "falsy" values such as '', "", false, null, 0, 
  and NaN, will not be replaced by a default value.
*/

// DON'T
function getUserActivities(limit, offset, hasAccess) {
  const userLimit = limit || 0;
  const userOffset = offset || 10;
  const userHasAccess = hasAccess || false;
  // Functionality
}

// DO 
function getUserActivities({ limit = 0, offset = 10, hasAccess = false}) {
  // Functionality
}

/*
  Functions should do one thing
  This is by far the most important rule in software engineering. When functions do more than one thing, they are harder to compose, 
  test, and reason about. When you can isolate a function to just one action, they can be refactored easily and your code will read much cleaner. 
  If you take nothing else away from this guide other than this, you'll be ahead of many developers.
*/

// DON'T
function sendEmailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// DO

function sendEmailToActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}