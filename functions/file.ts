export const exists = async (filePath: string): Promise<boolean> => {
  try {
    const file = await Deno.stat(filePath);
    return file.isFile;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }
    console.error(error);
    return false;
  }
};
