<?php

namespace App\Repository;

use App\Entity\Machin;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Machin|null find($id, $lockMode = null, $lockVersion = null)
 * @method Machin|null findOneBy(array $criteria, array $orderBy = null)
 * @method Machin[]    findAll()
 * @method Machin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MachinRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Machin::class);
    }

    // /**
    //  * @return Machin[] Returns an array of Machin objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Machin
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
