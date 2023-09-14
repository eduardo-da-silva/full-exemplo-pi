import magic

CONTENT_TYPE_ICO = "image/x-icon"
CONTENT_TYPE_JPG = "image/jpeg"
CONTENT_TYPE_PNG = "image/png"

CONTENT_TYPE_PDF = "application/pdf"


def get_content_type(file):
    if hasattr(file, "temporary_file_path"):
        content_type = magic.from_file(file.temporary_file_path(), mime=True)
    else:
        content_type = magic.from_buffer(file.read(), mime=True)

    if hasattr(file, "seek") and callable(file.seek):
        file.seek(0)

    return content_type