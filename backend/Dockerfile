FROM ubuntu:latest AS build

RUN apt-get update \
    && apt-get install -y openjdk-21-jdk maven

WORKDIR /app
COPY . .

RUN mvn clean install

# Stage 2 - Runtime
FROM eclipse-temurin:21-jdk

WORKDIR /app
EXPOSE 8080

COPY --from=build /app/target/devspecai-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]