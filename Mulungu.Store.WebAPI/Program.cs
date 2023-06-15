using Microsoft.EntityFrameworkCore;
using Mulungu.Loja.Domain.Contracts;
using Mulungu.Loja.Infra.Repositories.Impl.Context;
using Mulungu.Loja.Infra.Repositories.Impl.Repositories;
using Mulungu.Store.Domain.Service.Impl;

var builder = WebApplication.CreateBuilder(args);
var connectionString = "Server=127.0.0.1; port=3306; Database=dbtest; Uid=root; Pwd=root;";
var serverVersion = ServerVersion.AutoDetect(connectionString);
// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<StoreDbContext>(dbContextOptions =>
{
    //e.UseMySql(builder.Configuration.GetConnectionString("StoreConnection"));
    //options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
    dbContextOptions.UseMySql(connectionString, serverVersion);
}); 
//builder.Services.AddSingleton<IUnitOfWork, UnitOfWork>();

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<ProductService>();


// Change the registration of StoreDbContext to singleton

// Register IProductRepository with the desired lifetime (e.g., scoped)

//builder.Services.AddSingleton<IProductRepository, ProductRepository>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.BuildServiceProvider().CreateScope().ServiceProvider.GetRequiredService<StoreDbContext>().Database.Migrate();

var app = builder.Build();

// Configure the  request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();