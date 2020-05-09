const getVisitsAndDomains = (domains, visits, counter) => {
  for(let i = domains.length - 1; i >= 0;i--) {
    if (i === 0 || domains[i-1] === '.') {
      const domain = domains.slice(i - domains.length);
      const prevVisits = counter.get(domain) || 0;
      counter.set(domain, prevVisits + visits);
    }
  }
};

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
export const subdomainVisits = function(cpdomains) {
  const counter = new Map();
  const result = [];

  for (let item of cpdomains) {
    let [ visits, domains ] = item.split(' ');
    getVisitsAndDomains(domains, Number(visits), counter)
  }

  counter.forEach((visits, subdomain) => {
    result.push(`${visits} ${subdomain}`)
  });

  return result;
};