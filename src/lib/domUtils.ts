
/**
 * Helper function to safely get element offsetTop
 * @param element - The HTML element to check
 * @returns The offsetTop value or 0 if not available
 */
export const getElementOffsetTop = (element: Element | null): number => {
  if (!element) return 0;
  
  // Cast to HTMLElement which has the offsetTop property
  const htmlElement = element as HTMLElement;
  return htmlElement.offsetTop || 0;
};

/**
 * Helper function to safely scroll to an element
 * @param id - The ID of the element to scroll to
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: getElementOffsetTop(element),
      behavior: 'smooth'
    });
  }
};
