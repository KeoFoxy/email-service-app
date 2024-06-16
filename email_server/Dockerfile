# Use the official Rust image as a base
FROM rust:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Build the project in debug mode
RUN cargo build

# Set the startup command to run the compiled binary
CMD ["cargo", "run"]

# Expose the port the application runs on
EXPOSE 8080
