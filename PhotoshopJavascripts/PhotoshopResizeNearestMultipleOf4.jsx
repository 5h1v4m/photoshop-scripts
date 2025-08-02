// Resize Photoshop document to nearest multiple of 4 

if (app.documents.length > 0) 
    {
        var doc = app.activeDocument;

        // Get current dimensions
        var width = doc.width.as("px");
        var height = doc.height.as("px");

        // Function to round to nearest multiple of 4
        function roundToNearest4(value) {
            return Math.round(value / 4) * 4;
        }

        var newWidth = roundToNearest4(width);
        var newHeight = roundToNearest4(height);

        // Resize the image
        doc.resizeImage(UnitValue(newWidth, "px"), UnitValue(newHeight, "px"), null, ResampleMethod.BICUBIC);

        alert("Image resized to " + newWidth + "x" + newHeight + " px.");
    } 

else 
    {
        alert("No document is open.");
    }
