if (typeof window === 'undefined') {
  const server = import('./server');
  server.then((s) => s.server.listen());
} else {
  const worker = import('./worker');
  worker.then((w) => w.worker.start());
}

export {};
