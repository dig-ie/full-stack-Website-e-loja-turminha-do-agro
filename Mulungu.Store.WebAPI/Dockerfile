FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Mulungu.Store.WebAPI/Mulungu.Store.WebAPI.csproj", "Mulungu.Store.WebAPI/"]
RUN dotnet restore "Mulungu.Store.WebAPI/Mulungu.Store.WebAPI.csproj"
COPY . .
WORKDIR "/src/Mulungu.Store.WebAPI"
RUN dotnet build "Mulungu.Store.WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Mulungu.Store.WebAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Mulungu.Store.WebAPI.dll"]
