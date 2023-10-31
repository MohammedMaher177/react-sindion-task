export const apiEndpoints = {
  tickets: {
    all: "/tickets",
    byId: (ticket) => `/tickets/${ticket}`,
  },
  status: {
    all: "/status",
    byId: (state) => `/status/${state}`,
  },
  departments: {
    all: "/departments",
    byId: (department) => `/departments/${department}`,
  },
  titles: {
    all: "/titles",
    byId: (department) => `/titles/${department}`,
  },
};
