#!/bin/bash

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null
then
    echo "Error: ffmpeg could not be found. Please install it first."
    exit 1
fi

# Check if video file is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <path_to_video> [output_folder]"
  echo "Example: $0 input.mp4 output_frames"
  exit 1
fi

VIDEO_FILE="$1"
# Use provided output folder, or default to "frames" in current directory
OUTPUT_DIR="${2:-frames}"

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Extracting frames from '$VIDEO_FILE' at 30fps to '$OUTPUT_DIR'..."

# Extract frames at 30fps as PNG images
# %04d means the output will be padded with zeros (e.g., frame_0001.png)
ffmpeg -i "$VIDEO_FILE" -vf fps=30 "$OUTPUT_DIR/frame_%04d.png"

echo "Extraction complete!"
