FROM openjdk:11-jre-slim
ADD /target/java-k8s-demo-0.0.1-SNAPSHOT.jar java-k8s-demo.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "java-k8s-demo.jar"]