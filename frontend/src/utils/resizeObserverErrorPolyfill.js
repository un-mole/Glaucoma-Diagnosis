const resizeObserverErrorPolyfill = () => {
    try {
      const resizeObserverErrDiv = document.createElement('div');
      resizeObserverErrDiv.id = 'resizeObserverErrDiv';
      resizeObserverErrDiv.style.display = 'none';
      document.body.appendChild(resizeObserverErrDiv);
      const RO = new ResizeObserver(() => {
        const errDiv = document.getElementById('resizeObserverErrDiv');
        if (errDiv) {
          errDiv.style.display = 'block';
          document.body.removeChild(errDiv);
        }
      });
      RO.observe(document.body);
    } catch (error) {
      console.error('Failed to suppress ResizeObserver error:', error);
    }
  };
  
  export default resizeObserverErrorPolyfill;
  