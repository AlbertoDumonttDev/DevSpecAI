FROM ubuntu:latest AS build

RUN apt-get update && apt-get install -y openjdk-21-jdk maven

WORKDIR /app/backend
COPY backend/ .

RUN mvn clean install -DskipTests

FROM eclipse-temurin:21-jdk

WORKDIR /app
EXPOSE 8080

COPY --from=build /app/backend/target/devspecai-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]