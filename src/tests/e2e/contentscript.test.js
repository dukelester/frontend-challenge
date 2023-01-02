test('createParagraph fetches and displays repository descriptions', async () => {
  // Set up the test by creating a mock parent element and appending it to the document
  const parentElement = document.createElement('div');
  document.body.appendChild(parentElement);

  // Call the function under test
  createParagraph();

  // Wait for the API request to complete
  await waitFor(() => parentElement.children.length > 0);

  // Verify that the paragraph element was appended to the parent element
  expect(parentElement.children).toHaveLength(1);
  const paragraph = parentElement.children[0];
  expect(paragraph.tagName).toBe('P');

  // Verify that the paragraph element contains the expected repository descriptions
  const descriptions = Array.from(paragraph.querySelectorAll('b')).map((b) => b.textContent);
  expect(descriptions).toEqual(['Repo 1 description', 'Repo 2 description', 'Repo 3 description']);
});
