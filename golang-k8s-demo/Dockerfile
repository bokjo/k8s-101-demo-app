FROM golang:1.11.0-stretch as build
WORKDIR /app
COPY . ./
RUN CGO_ENABLED=0 GOOS=linux go build -mod=vendor -o api

FROM alpine:3.8
WORKDIR /root/
COPY --from=build /app/api .
CMD ["./api"]