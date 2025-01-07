export function sanitizeResponse(response) {
  // Remove any potential personal information patterns
  const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
  const phonePattern = /(\+\d{1,3}[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g;
  const addressPattern = /\d+\s+([a-zA-Z]+\s+){1,}\d{5}/g;

  return (
    response
      // .replace(emailPattern, "[EMAIL REMOVED]")
      .replace(phonePattern, "[PHONE REMOVED]")
      .replace(addressPattern, "[ADDRESS REMOVED]")
  );
}
