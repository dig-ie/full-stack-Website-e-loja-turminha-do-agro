using Mulungu.Loja.Domain.Contracts;
using Mulungu.Loja.Domain.Entities;
using Mulungu.Loja.Infra.Repositories.Impl.Context;

namespace Mulungu.Loja.Infra.Repositories.Impl.Repositories;

public class ProductRepository : 
    Repository<Product>, 
    IProductRepository
{
    public ProductRepository(StoreDbContext dbContext) : base(dbContext)
    {
    }
}