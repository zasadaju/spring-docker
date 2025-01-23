from openjdk:11
add target/springboot-mongodb.jar springboot-mongodb.jar
expose 8080
entrypoint ["java", ".jar", "springboot-mongodb.jar"]