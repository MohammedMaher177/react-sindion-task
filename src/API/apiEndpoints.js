export const apiEndpoints = {
  tickets: {
    all: "/tickets",
    byId: (ticket) => `/orders/${ticket}`,
  },
  status: {
    all: "/status",
    byId: (state) => `/status/${state}`,
  },
  departments: {
    all: "/departments",
    byId: (department) => `/products/${department}`,
  },
};
