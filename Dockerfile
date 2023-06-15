FROM openjdk:17-oracle
COPY target/*.jar employee-system.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "employee-system.jar"]